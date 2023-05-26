import { ChangeEvent, memo, useCallback, useRef, useState } from 'react';
import { CloseIcon } from 'common/icons/common';
import { Avatar } from 'common/components/Avatar';
import { CropAvatarModal } from './CropAvatarModal';
import styles from './styles.module.scss';

type Props = {
	avatar: string | null;
	firstName: string;
	lastName: string;
	onUpdateAvatar: (avatar: string | null) => void;
};

export const ProfileInformation = memo(
	({ avatar, firstName, lastName, onUpdateAvatar }: Props) => {
		const [selectedImage, setSelectedImage] = useState('');

		const fullName = `${firstName} ${lastName}`;

		const hiddenFileInputRef = useRef<HTMLInputElement>(null);

		const handleAvatarClick = useCallback(() => {
			hiddenFileInputRef.current?.click(); // trigger file input modal
		}, []);

		const handleRemoveAvatarClick = useCallback(() => {
			onUpdateAvatar(null);
		}, [onUpdateAvatar]);

		const onMediaChange = useCallback(async (e: ChangeEvent<HTMLInputElement> | null) => {
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

		const handleAvatarChange = useCallback(
			(avatar: string) => {
				onUpdateAvatar(avatar);
			},
			[onUpdateAvatar]
		);

		return (
			<div className={styles.container}>
				<Avatar
					profileImage={avatar}
					avatarContainerClassName={styles.avatar}
					avatarClassName={styles.avatar}
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
				<p className={styles.fullName}>{fullName}</p>
				<CropAvatarModal
					selectedImage={selectedImage}
					onCloseClick={handleCloseCropAvatarModalClick}
					onAvatarChange={handleAvatarChange}
				/>
			</div>
		);
	}
);
