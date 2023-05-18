import { memo, MouseEvent } from 'react';
import clsx from 'clsx';
import { DefaultAvatarIcon } from 'common/icons/common';
import styles from './styles.module.scss';

type Props = {
	profileImage?: string | null;
	avatarContainerClassName?: string;
	avatarClassName?: string;
	onClick?: (e: MouseEvent<HTMLDivElement>) => void;
};

export const Avatar = memo(
	({ profileImage, avatarContainerClassName, avatarClassName, onClick }: Props) => {
		const avatarContainerClass = clsx(styles.container, avatarContainerClassName);
		const avatarClass = clsx(styles.avatar, avatarClassName);

		return (
			<div className={avatarContainerClass} onClick={onClick}>
				{profileImage ? (
					<img alt='' src={profileImage} className={avatarClass} />
				) : (
					<DefaultAvatarIcon className={avatarClass} />
				)}
			</div>
		);
	}
);
