import { memo } from 'react';

type Props = {
	className?: string;
};

export const DefaultAvatarIcon = memo(({ className }: Props) => {
	return (
		<svg
			className={className}
			width='40'
			height='40'
			viewBox='0 0 40 40'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect width='40' height='40' rx='20' fill='#FBD1A2' />
			<path
				d='M20 22.6667C22.9455 22.6667 25.3333 20.2789 25.3333 17.3333C25.3333 14.3878 22.9455 12 20 12C17.0545 12 14.6667 14.3878 14.6667 17.3333C14.6667 20.2789 17.0545 22.6667 20 22.6667Z'
				stroke='#0B2545'
				strokeWidth='2'
				strokeMiterlimit='10'
			/>
			<path
				d='M11.9158 27.3326C12.7354 25.9139 13.9139 24.7358 15.333 23.9168C16.7521 23.0978 18.3617 22.6667 20.0001 22.6667C21.6386 22.6667 23.2482 23.0979 24.6672 23.9169C26.0862 24.736 27.2648 25.914 28.0844 27.3327'
				stroke='#0B2545'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
});
