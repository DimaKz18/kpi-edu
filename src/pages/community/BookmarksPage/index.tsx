import { useTranslation } from 'react-i18next';
import { useFetchSavedMediasQuery } from 'service/media';
import { NavigationLayout } from 'layout/NavigationLayout';
import { MediaCard } from 'common/components/MediaCard';
import { EmptyResultIcon } from 'common/icons/common';
import { Loader } from 'common/components/Loader';
import styles from './styles.module.scss';

export const BookmarksPage = () => {
	const { t } = useTranslation();

	const { data: savedMedias, isFetching: loadingSavedMedias } =
		useFetchSavedMediasQuery();

	const hasMedias = savedMedias && savedMedias.length > 0;
	const showNoResultText = !loadingSavedMedias && !hasMedias;

	return (
		<NavigationLayout>
			<div className={styles.container}>
				<p className={styles.title}>{t('bookmarks_page_title')}</p>
				<div className={styles.savedMediasContainer}>
					{hasMedias && (
						<div className={styles.gridContainer}>
							{savedMedias.map((media) => {
								return <MediaCard key={media.id} {...media} />;
							})}
						</div>
					)}
				</div>
				{showNoResultText && (
					<div className={styles.noResultContainer}>
						<EmptyResultIcon className={styles.icon} />
						<p className={styles.title}>{t('bookmarks_page_no_result_title')}</p>
					</div>
				)}
				<Loader show={loadingSavedMedias} />
			</div>
		</NavigationLayout>
	);
};
