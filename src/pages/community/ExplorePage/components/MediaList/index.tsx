import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { Media } from 'service/media/models';
import { EmptyResultIcon } from 'common/icons/common';
import { MediaCard } from 'common/components/MediaCard';
import { Loader } from 'common/components/Loader';
import styles from './styles.module.scss';

type Props = {
	medias: Media[];
	loadingMedias: boolean;
	onMediaClick: (mediaId: number) => void;
};

export const MediaList = memo(({ medias, loadingMedias, onMediaClick }: Props) => {
	const { t } = useTranslation();

	const hasMedias = medias.length > 0;
	const showNoResultText = !loadingMedias && !hasMedias;

	return (
		<div className={styles.container}>
			{hasMedias && (
				<div className={styles.mediaListContainer}>
					{medias.map((media) => {
						return (
							<MediaCard
								key={media.id}
								{...media}
								onMediaClick={() => onMediaClick(media.id)}
							/>
						);
					})}
				</div>
			)}
			{showNoResultText && (
				<div className={styles.noResultContainer}>
					<EmptyResultIcon className={styles.icon} />
					<p className={styles.title}>{t('explore_page_no_result_title')}</p>
				</div>
			)}
			<Loader show={loadingMedias} />
		</div>
	);
});
