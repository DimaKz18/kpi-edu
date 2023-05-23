import { memo, MouseEvent, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useAppSelector } from 'store';
import { selectLoadingUpdatedProfile } from 'service/profile';
import { UpdatedProfileErrors, UpdatedProfileKey } from '../ProfileInformation/types';
import { animationVariants } from './helpers';
import ReactPortal from 'common/components/ReactPortal';
import { CloseIcon } from 'common/icons/common';
import { AvatarSection } from './components/AvatarSection';
import { TextInputField } from './components/TextInputField';
import { PrimaryButton } from 'common/components/PrimaryButton';
import styles from './styles.module.scss';

type Props = {
	show: boolean;
	firstName: string;
	lastName: string;
	avatar: string | null;
	disabled: boolean;
	errors: UpdatedProfileErrors;
	showErrors: boolean;
	onCloseClick: () => void;
	onProfileChange: (field: UpdatedProfileKey, value: string | null) => void;
	onSaveProfileClick: () => void;
};

export const EditProfileModal = memo(
	({
		show,
		firstName,
		lastName,
		avatar,
		disabled,
		errors,
		showErrors,
		onCloseClick,
		onProfileChange,
		onSaveProfileClick,
	}: Props) => {
		const { t } = useTranslation();

		const loadingUpdatedProfile = useAppSelector(selectLoadingUpdatedProfile);

		const inputs = useMemo(() => {
			return [
				{
					initialValue: firstName,
					placeholder: t('profile_page_updated_profile_first_name_placeholder'),
					error: showErrors ? errors.firstName : '',
					onProfileChange: (value: string) => onProfileChange('firstName', value),
				},
				{
					initialValue: lastName,
					placeholder: t('profile_page_updated_profile_last_name_placeholder'),
					error: showErrors ? errors.lastName : '',
					onProfileChange: (value: string) => onProfileChange('lastName', value),
				},
			];
		}, [
			errors.firstName,
			errors.lastName,
			firstName,
			lastName,
			onProfileChange,
			showErrors,
			t,
		]);

		const onModalClick = (e: MouseEvent<HTMLDivElement>) => {
			e.stopPropagation();
		};

		const handleAvatarChange = useCallback(
			(avatar: string | null) => {
				onProfileChange('avatar', avatar);
			},
			[onProfileChange]
		);

		return (
			<ReactPortal wrapperId={'edit-profile-modal'}>
				<motion.div
					className={styles.container}
					variants={animationVariants}
					initial={'initial'}
					animate={show ? 'show' : 'hide'}
					exit={'hide'}
					transition={{ duration: 0.3 }}
					onClick={onCloseClick}
				>
					<div className={styles.modal} onClick={onModalClick}>
						<CloseIcon
							className={styles.closeIcon}
							color='#205295'
							onClick={onCloseClick}
						/>
						<AvatarSection avatar={avatar} onAvatarChange={handleAvatarChange} />
						<div className={styles.inputsContainer}>
							{inputs.map((input) => {
								return <TextInputField key={input.placeholder} {...input} />;
							})}
						</div>
						<PrimaryButton
							title={t('profile_page_updated_profile_save_button')}
							loading={loadingUpdatedProfile}
							disabled={disabled}
							className={styles.saveButton}
							onClick={onSaveProfileClick}
						/>
					</div>
				</motion.div>
			</ReactPortal>
		);
	}
);
