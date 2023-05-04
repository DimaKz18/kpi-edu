import { memo } from 'react';
import { NavigationBar } from './components/NavigationBar';
import styles from './styles.module.scss';

type Props = {
	children: JSX.Element;
};

export const NavigationLayout = memo(({ children }: Props) => {
	return (
		<>
			<NavigationBar />
			<div className={styles.childrenWrapper}>{children}</div>
		</>
	);
});
