import { memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PrimaryButton } from '../PrimaryButton';
import { SecondaryButton } from '../SecondaryButton';

type Props = {
	subscribed: boolean;
	className?: string;
};

export const SubscribeButton = memo(({ subscribed, className }: Props) => {
	const [isSubscribed, setIsSubscribed] = useState(subscribed);

	const { t } = useTranslation();

	useEffect(() => {
		if (isSubscribed !== subscribed) setIsSubscribed(subscribed);
	}, [isSubscribed, subscribed]);

	const handleToggleSubscribeClick = useCallback(() => {
		if (isSubscribed) {
		} else {
		}
	}, [isSubscribed]);

	return isSubscribed ? (
		<SecondaryButton
			title={t('media_card_unsubscribe_button')}
			loading={false}
			className={className}
			onClick={handleToggleSubscribeClick}
		/>
	) : (
		<PrimaryButton
			title={t('media_card_subscribe_button')}
			loading={false}
			className={className}
			onClick={handleToggleSubscribeClick}
		/>
	);
});
