import { LogoIcon } from 'common/icons/common';
import { OwlIcon } from 'common/icons/auth';
import { NavBar } from './components/NavBar';
import { TabsMenu } from './components/TabsMenu';
import styles from './styles.module.scss';

type Props = {
	activeTab: number;
	children: JSX.Element;
};

export const AuthLayout = ({ activeTab, children }: Props) => {
	return (
		<div className={styles.container}>
			<NavBar />
			<div className={styles.contentWrapper}>
				<div className={styles.formWrapper}>
					<LogoIcon />
					<TabsMenu activeTab={activeTab} />
					{children}
				</div>
				<OwlIcon />
			</div>
		</div>
	);
};
