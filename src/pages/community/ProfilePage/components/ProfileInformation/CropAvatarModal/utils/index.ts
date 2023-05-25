import { Area } from 'react-easy-crop';

const createImage = (url: string): Promise<any> =>
	new Promise((resolve, reject) => {
		const image = new Image();
		image.addEventListener('load', () => resolve(image));
		image.addEventListener('error', (error) => reject(error));
		image.src = url;
	});

const getRadianAngle = (degreeValue: number) => {
	return (degreeValue * Math.PI) / 180;
};

const rotateSize = (width: number, height: number, rotation: number) => {
	const rotRad = getRadianAngle(rotation);

	return {
		width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
		height: Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
	};
};

export const getCroppedImage = async (
	imageSrc: string,
	pixelCrop: Area,
	rotation = 0,
	flip = { horizontal: false, vertical: false }
) => {
	const image = await createImage(imageSrc);
	const canvas = document.createElement('canvas');
	const canvasContext = canvas.getContext('2d');

	if (!canvasContext) {
		return null;
	}

	// calculate bounding box of the rotated image
	const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
		image.width,
		image.height,
		rotation
	);

	// set canvas size to match the bounding box
	canvas.width = bBoxWidth;
	canvas.height = bBoxHeight;

	// draw image
	canvasContext.drawImage(image, 0, 0);

	// croppedAreaPixels values are bounding box relative
	// extract the cropped image using these values
	const data = canvasContext.getImageData(
		pixelCrop.x,
		pixelCrop.y,
		pixelCrop.width,
		pixelCrop.height
	);

	// set canvas width to final desired crop size - this will clear existing context
	canvas.width = pixelCrop.width;
	canvas.height = pixelCrop.height;

	// paste generated image at the top left corner
	canvasContext.putImageData(data, 0, 0);

	return canvas.toDataURL('image/jpeg');
};
