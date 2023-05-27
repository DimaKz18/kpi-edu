import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { MediaRegion, MediaSpecialization, MediaType } from 'service/media/models';
import {
	getMediaRegionTitle,
	getMediaSpecializationTitle,
	getMediaTypeTitle,
} from './utils';
import { ActiveStarIcon } from 'common/icons/community';
import { SubscribeButton } from '../SubscribeButton';
import styles from './styles.module.scss';

type Props = {
	url: string;
	title: string;
	specialization: MediaSpecialization;
	type: MediaType;
	region: MediaRegion;
	rate: number;
	subscribed: boolean;
	onMediaClick?: () => void;
};

export const MediaCard = memo(
	({
		url,
		title,
		specialization,
		type,
		region,
		rate,
		subscribed,
		onMediaClick,
	}: Props) => {
		const { t } = useTranslation();

		const specializationTitle = getMediaSpecializationTitle(specialization, t);
		const typeTitle = getMediaTypeTitle(type, t);
		const regionTitle = getMediaRegionTitle(region, t);
		const stars = new Array(rate).fill('');

		return (
			<div className={styles.container} onClick={onMediaClick}>
				<div className={styles.logoContainer}>
					<img alt={title} src={url} className={styles.logo} />
				</div>
				<p className={styles.mediaTitle}>{title}</p>
				<div className={styles.mediaInformation}>
					<p className={styles.filterTitle}>{specializationTitle}</p>
					<p className={styles.filterTitle}>{typeTitle}</p>
					<p className={styles.filterTitle}>{regionTitle}</p>
					<div className={styles.rateContainer}>
						<p className={styles.filterTitle}>{t('media_card_rate_title')} -</p>
						{stars.map((_, idx) => {
							return <ActiveStarIcon key={idx} className={styles.starIcon} />;
						})}
					</div>
				</div>
				<SubscribeButton subscribed={subscribed} className={styles.subscribeButton} />
			</div>
		);
	}
);
