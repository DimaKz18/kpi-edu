import { memo, MouseEvent } from 'react';

type Props = {
	className?: string;
	color?: string;
	onClick?: (e: MouseEvent<SVGSVGElement>) => void;
};

export const CloseIcon = memo(({ className,color, onClick }: Props) => {
	return (
		<svg
			className={className}
			onClick={onClick}
			width='18'
			height='18'
			viewBox='0 0 18 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M1 1L17 17M17 1L1 17L17 1Z'
				stroke={color || 'black'}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
});
