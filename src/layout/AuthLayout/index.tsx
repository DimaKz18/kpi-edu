import { OwlIcon } from 'common/icons/auth';
import { TabsMenu } from './TabsMenu';
import styles from './styles.module.scss';

type Props = {
	activeTab: number;
	children: JSX.Element;
};

export const AuthLayout = ({ activeTab, children }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.formWrapper}>
				<TabsMenu activeTab={activeTab} />
				{children}
			</div>
			<OwlIcon />
		</div>
	);
};
