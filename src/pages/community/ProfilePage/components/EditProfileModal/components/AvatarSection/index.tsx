import { ChangeEvent, memo, useCallback, useRef, useState } from 'react';
import { CloseIcon } from 'common/icons/common';
import { Avatar } from 'common/components/Avatar';
import { CropAvatarModal } from '../CropAvatarModal';
import styles from './styles.module.scss';

type Props = {
	avatar?: string | null;
	onAvatarChange: (value: string | null) => void;
};

export const AvatarSection = memo(({ avatar, onAvatarChange }: Props) => {
	const [selectedImage, setSelectedImage] = useState('');

	const hiddenFileInputRef = useRef<HTMLInputElement>(null);

	const handleAvatarClick = useCallback(() => {
		hiddenFileInputRef.current?.click(); // trigger file input modal
	}, []);

	const handleRemoveAvatarClick = useCallback(() => {
		onAvatarChange(null);
	}, [onAvatarChange]);

	const onMediaChange = useCallback(async (e: ChangeEvent<HTMLInputElement> | null) => {
		// convert file into base64 and save it
		if (!e || !e.target.files || e.target.files.length === 0) return;
		const file = e.target.files[0];
		const isImageFile = file.type.split('/')[0] === 'image';

		if (isImageFile) {
			setSelectedImage(URL.createObjectURL(file)); // save selected image
		}
	}, []);

	const handleCloseCropAvatarModalClick = useCallback(() => {
		setSelectedImage('');
	}, []);

	return (
		<div className={styles.container}>
			<Avatar
				profileImage={avatar}
				avatarContainerClassName={styles.avatar}
				onClick={handleAvatarClick}
			/>
			{avatar && (
				<div className={styles.removeIconContainer}>
					<CloseIcon
						className={styles.removeIcon}
						color='white'
						onClick={handleRemoveAvatarClick}
					/>
				</div>
			)}
			<input
				type='file'
				id='input-file-upload'
				title=''
				value=''
				className={styles.fileInput}
				ref={hiddenFileInputRef}
				onChange={onMediaChange}
			/>
			<CropAvatarModal
				selectedImage={selectedImage}
				onCloseClick={handleCloseCropAvatarModalClick}
				onAvatarChange={onAvatarChange}
			/>
		</div>
	);
});
