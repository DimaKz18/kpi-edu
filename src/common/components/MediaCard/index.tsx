import { memo } from 'react';
import { MediaRegion, MediaSpecialization, MediaType } from 'service/media/models';
import { PrimaryButton } from 'common/components/PrimaryButton';
import styles from './styles.module.scss';

type Props = {
	url: string;
	title: string;
	specialization: MediaSpecialization;
	type: MediaType;
	region: MediaRegion;
};

export const MediaCard = memo(({ url, title, specialization, type, region }: Props) => {
	return (
		<div className={styles.container}>
			<img alt='' src={url} className={styles.photo} />
			<div className={styles.mediaInformation}>
				<p className={styles.mediaTitle}>{title}</p>
				<p className={styles.filterTitle}>{specialization}</p>
				<p className={styles.filterTitle}>{type}</p>
				<p className={styles.filterTitle}>{region}</p>
			</div>
			<PrimaryButton title={'Subscribe'} className={styles.subscribeButton} />
		</div>
	);
});
