import { memo, MouseEvent, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { Area } from 'react-easy-crop';
import { getCroppedImage } from './utils';
import { animationVariants } from '../../helpers';
import ReactPortal from 'common/components/ReactPortal';
import { HeaderSection } from './components/HeaderSection';
import { CropAvatarSection } from './components/CropAvatarSection';
import styles from './styles.module.scss';

type Props = {
	selectedImage: string;
	onCloseClick: () => void;
	onAvatarChange: (value: string) => void;
};

export const CropAvatarModal = memo(
	({ selectedImage, onCloseClick, onAvatarChange }: Props) => {
		const [croppedImage, setCroppedImage] = useState('');

		const onModalClick = (e: MouseEvent<HTMLDivElement>) => {
			e.stopPropagation();
		};

		const handleCloseClick = useCallback(() => {
			setCroppedImage('');
			onCloseClick();
		}, [onCloseClick]);

		const handleSaveClick = useCallback(() => {
			if (!croppedImage) return;
			onAvatarChange(croppedImage);
			handleCloseClick();
		}, [croppedImage, onAvatarChange, handleCloseClick]);

		const handleCropComplete = useCallback(
			async (_: Area, croppedAreaPixels: Area) => {
				const croppedImage = await getCroppedImage(selectedImage, croppedAreaPixels);
				if (croppedImage) setCroppedImage(croppedImage);
			},
			[selectedImage]
		);

		return (
			<ReactPortal wrapperId={'upload-avatar-modal'}>
				<motion.div
					className={styles.container}
					variants={animationVariants}
					initial={'initial'}
					animate={selectedImage ? 'show' : 'hide'}
					exit={'hide'}
					transition={{ duration: 0.3 }}
					onClick={handleCloseClick}
				>
					<div className={styles.modal} onClick={onModalClick}>
						<HeaderSection
							onCloseClick={handleCloseClick}
							onSaveClick={handleSaveClick}
						/>
						<CropAvatarSection
							selectedImage={selectedImage}
							onCropComplete={handleCropComplete}
						/>
					</div>
				</motion.div>
			</ReactPortal>
		);
	}
);
