import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';
import { Grid } from '@mui/material';
import { AuthLayout } from '../../../layout/AuthLayout';
import { SIGNUP_TAB } from '../../../layout/AuthLayout/helpers';

export const SignUpPage = () => {
	const classes = useStyles();
	const { t } = useTranslation();

	const onSignUpClick = () => {};

	return (
		<AuthLayout
			activeTab={SIGNUP_TAB}
			buttonTitle={t('signup_page_button')}
			onClick={onSignUpClick}
		>
			<Grid />
		</AuthLayout>
	);
};
