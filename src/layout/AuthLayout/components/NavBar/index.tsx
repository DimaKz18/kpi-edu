import { memo } from 'react';
import { Tabs } from './components/Tabs';
import { DefaultAvatarIcon } from 'common/icons/common';
import styles from './styles.module.scss';

export const NavBar = memo(() => {
	return (
		<div className={styles.container}>
			<Tabs />
			<DefaultAvatarIcon className={styles.avatarIcon} />
		</div>
	);
});
