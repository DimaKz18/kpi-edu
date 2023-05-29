import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { MediaRegion, MediaSpecialization, MediaType } from 'service/media/models';
import {
	getMediaRegionTitle,
	getMediaSpecializationTitle,
	getMediaTypeTitle,
} from 'common/components/MediaCard/utils';
import { ActiveStarIcon } from 'common/icons/community';
import { SubscribeButton } from 'common/components/SubscribeButton';
import styles from './styles.module.scss';

type Props = {
	id: string;
	url: string;
	title: string;
	description: string;
	specialization: MediaSpecialization;
	type: MediaType;
	region: MediaRegion;
	rate: number;
	subscribed: boolean;
};

export const MediaInformation = memo(
	({
		id,
		url,
		title,
		description,
		specialization,
		type,
		region,
		rate,
		subscribed,
	}: Props) => {
		const { t } = useTranslation();

		const specializationTitle = getMediaSpecializationTitle(specialization, t);
		const typeTitle = getMediaTypeTitle(type, t);
		const regionTitle = getMediaRegionTitle(region, t);
		const stars = new Array(rate).fill('');

		return (
			<div className={styles.container}>
				<div className={styles.logoContainer}>
					<img alt={title} src={url} className={styles.logo} />
				</div>
				<div className={styles.mediaInformation}>
					<p className={styles.title}>{title}</p>
					<p className={styles.description}>{description}</p>
					<div className={styles.filtersContainer}>
						<p className={styles.filterTitle}>{specializationTitle}</p>
						<p className={styles.filterTitle}>{typeTitle}</p>
						<p className={styles.filterTitle}>{regionTitle}</p>
						<div className={styles.rateContainer}>
							<p className={styles.rateTitle}>{t('media_card_rate_title')} -</p>
							{stars.map((_, idx) => {
								return <ActiveStarIcon key={idx} className={styles.starIcon} />;
							})}
						</div>
					</div>
				</div>
				<SubscribeButton
					mediaId={id}
					subscribed={subscribed}
					className={styles.subscribeButton}
				/>
			</div>
		);
	}
);
