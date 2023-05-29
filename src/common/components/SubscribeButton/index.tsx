import { memo, MouseEvent, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
	useSubscribeOnMediaMutation,
	useUnsubscribeFromMediaMutation,
} from 'service/media';
import { PrimaryButton } from '../PrimaryButton';
import { SecondaryButton } from '../SecondaryButton';

type Props = {
	mediaId: string;
	subscribed: boolean;
	className?: string;
};

export const SubscribeButton = memo(({ mediaId, subscribed, className }: Props) => {
	const [isSubscribed, setIsSubscribed] = useState(subscribed);

	const { t } = useTranslation();
	const [subscribeOnMedia, { isLoading: loadingSubscribeOnMedia }] =
		useSubscribeOnMediaMutation();
	const [unsubscribeFromMedia, { isLoading: loadingUnsubscribeFromMedia }] =
		useUnsubscribeFromMediaMutation();

	const loading = loadingSubscribeOnMedia || loadingUnsubscribeFromMedia;

	useEffect(() => {
		if (isSubscribed !== subscribed) setIsSubscribed(subscribed);
	}, [isSubscribed, subscribed]);

	const handleToggleSubscribeClick = useCallback(
		(e?: MouseEvent<HTMLButtonElement>) => {
			e?.stopPropagation();
			if (isSubscribed) {
				unsubscribeFromMedia(mediaId);
			} else {
				subscribeOnMedia(mediaId);
			}
		},
		[isSubscribed, mediaId, subscribeOnMedia, unsubscribeFromMedia]
	);

	return isSubscribed ? (
		<SecondaryButton
			title={t('media_card_unsubscribe_button')}
			loading={loading}
			className={className}
			onClick={handleToggleSubscribeClick}
		/>
	) : (
		<PrimaryButton
			title={t('media_card_subscribe_button')}
			loading={loading}
			className={className}
			onClick={handleToggleSubscribeClick}
		/>
	);
});
