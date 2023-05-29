import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { MediaRegion, MediaSpecialization, MediaType } from 'service/media/models';
import { useFetchSavedMediasQuery } from 'service/media';
import {
	getMediaRegionTitle,
	getMediaSpecializationTitle,
	getMediaTypeTitle,
} from './utils';
import { ActiveStarIcon } from 'common/icons/community';
import { SubscribeButton } from '../SubscribeButton';
import styles from './styles.module.scss';

type Props = {
	id: string;
	url: string;
	title: string;
	specialization: MediaSpecialization;
	type: MediaType;
	region: MediaRegion;
	rate: number;
	onMediaClick?: () => void;
};

export const MediaCard = memo(
	({ id, url, title, specialization, type, region, rate, onMediaClick }: Props) => {
		const { t } = useTranslation();

		const { data: savedMedias } = useFetchSavedMediasQuery();

		const subscribed = Boolean(
			savedMedias && savedMedias.find((media) => media.id === id)
		);

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
				<SubscribeButton
					mediaId={id}
					subscribed={subscribed}
					className={styles.subscribeButton}
				/>
			</div>
		);
	}
);
