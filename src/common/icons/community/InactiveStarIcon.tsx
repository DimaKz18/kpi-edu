import { memo } from 'react';

type Props = {
	className?: string;
	onClick?: () => void;
};

export const InactiveStarIcon = memo(({ className, onClick }: Props) => {
	return (
		<svg
			className={className}
			onClick={onClick}
			viewBox='0 0 1024 1024'
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fill='none'
				stroke='#94032e'
				strokeWidth='60px'
				d='M512.005628 86.322018 619.43129 394.883629l340.15005 2.428306L696.758446 605.436042 800.160467 937.679006 512.005628 739.707119 223.851812 937.679006l96.717785-336.665693L64.416614 397.311935l340.16233-2.428306L512.005628 86.322018z'
			/>
		</svg>
	);
});
