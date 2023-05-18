import { memo } from 'react';

type Props = {
	className?: string;
};

export const CloseArrowIcon = memo(({ className }: Props) => {
	return (
		<svg
			className={className}
			width='14'
			height='8'
			viewBox='0 0 16 9'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M8.70711 0.292893C8.31658 -0.097631 7.68342 -0.097631 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 2V1H7V2H9Z'
				fill='white'
			/>
		</svg>
	);
});
