import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styles from './styles.module.scss';

ChartJS.register(ArcElement, Legend, Tooltip);

type Props = {
	subscriptionsCount: number;
	likesCount: number;
	postsCount: number;
};

export const MediaPieChart = memo(
	({ subscriptionsCount, likesCount, postsCount }: Props) => {
		const { t } = useTranslation();

		const pieData = useMemo(() => {
			return {
				labels: [
					t('media_page_subscriptions_statistics_title'),
					t('media_page_likes_statistics_title'),
					t('media_page_posts_statistics_title'),
				],
				datasets: [
					{
						data: [subscriptionsCount, likesCount, postsCount],
						backgroundColor: ['#ff6969', '#03c988', '#7286d3'],
						hoverOffset: 8,
					},
				],
			};
		}, [likesCount, postsCount, subscriptionsCount, t]);

		const pieOptions = {
			plugins: {
				tooltip: {
					boxPadding: 6,
				},
				legend: {
					labels: {
						boxWidth: 20,
						padding: 20,
					},
				},
			},
		};

		return (
			<div className={styles.container}>
				<p className={styles.title}>{t('media_page_statistics_title')}</p>
				<Pie className={styles.pieChart} data={pieData} options={pieOptions} />
			</div>
		);
	}
);
