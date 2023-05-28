import { useLocation } from 'react-router-dom';
import { useFetchMediaQuery } from 'service/media';
import { NavigationLayout } from 'layout/NavigationLayout';
import { MediaInformation } from './components/MediaInformation';
import { MediaPieChart } from './components/MediaPieChart';
import { Loader } from 'common/components/Loader';
import styles from './styles.module.scss';

export const MediaPage = () => {
	const location = useLocation();
	const pathname = location.pathname;
	const mediaId = pathname.split('/')[2];

	const { data: media, isFetching: loadingMedia } = useFetchMediaQuery(mediaId);

	return (
		<NavigationLayout>
			<div className={styles.container}>
				{media && (
					<div className={styles.mediaInformationContainer}>
						<MediaInformation {...media} />
						<div className={styles.verticalLine} />
						<MediaPieChart
							subscriptionsCount={media.subscriptions}
							likesCount={media.likes}
							postsCount={media.posts}
						/>
					</div>
				)}
				<Loader show={loadingMedia} />
			</div>
		</NavigationLayout>
	);
};
