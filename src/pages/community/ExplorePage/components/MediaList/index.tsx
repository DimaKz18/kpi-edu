import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { Media } from 'service/media/models';
import { MediaCard } from 'common/components/MediaCard';
import { Loader } from 'common/components/Loader';
import styles from './styles.module.scss';

type Props = {
	medias: Media[];
	loadingMedias: boolean;
};

export const MediaList = memo(({ medias, loadingMedias }: Props) => {
	const { t } = useTranslation();

	const hasMedias = medias.length > 0;
	const showNoResultText = !loadingMedias && !hasMedias;

	return (
		<div className={styles.container}>
			{hasMedias && (
				<AnimatePresence>
					<motion.div layout className={styles.mediaListContainer}>
						{medias.map((media) => {
							return (
								<MediaCard
									key={media.id}
									url={
										'https://prm.ua/wp-content/uploads/2020/06/Znimok-ekrana-2020-06-16-o-20.53.38.png'
									}
									title={'Ukrinform'}
									specialization={'politics'}
									type={'Online media'}
									region={'Kyiv region'}
								/>
							);
						})}
					</motion.div>
				</AnimatePresence>
			)}
			{showNoResultText && (
				<p className={styles.noResultTitle}>{t('explore_page_no_result_title')}</p>
			)}
			<Loader show={loadingMedias} />
		</div>
	);
});
