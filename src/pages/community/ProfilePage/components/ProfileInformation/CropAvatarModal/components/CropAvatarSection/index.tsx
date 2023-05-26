import { memo, useState } from 'react';
import Cropper, { Area, Point } from 'react-easy-crop';
import { AVATAR_SIZE } from '../../helpers';
import styles from './styles.module.scss';

type Props = {
	selectedImage: string;
	onCropComplete: (croppedArea: Area, croppedAreaPixels: Area) => void;
};

export const CropAvatarSection = memo(({ selectedImage, onCropComplete }: Props) => {
	const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
	const [zoom, setZoom] = useState(1);

	const cropSize = { width: AVATAR_SIZE, height: AVATAR_SIZE };

	return (
		<div className={styles.container}>
			<Cropper
				image={selectedImage}
				crop={crop}
				cropSize={cropSize}
				zoom={zoom}
				aspect={1}
				cropShape='round'
				showGrid={false}
				onCropChange={setCrop}
				onCropComplete={onCropComplete}
				onZoomChange={setZoom}
				classes={{ containerClassName: styles.cropper }}
			/>
		</div>
	);
});
