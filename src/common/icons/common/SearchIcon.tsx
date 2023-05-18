import React, { memo } from 'react';

type Props = {
	className?: string;
};

export const SearchIcon = memo(({ className }: Props) => {
	return (
		<svg
			className={className}
			width='16'
			height='16'
			viewBox='0 0 19 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M7.33333 13.1667C10.555 13.1667 13.1667 10.555 13.1667 7.33333C13.1667 4.11167 10.555 1.5 7.33333 1.5C4.11167 1.5 1.5 4.11167 1.5 7.33333C1.5 10.555 4.11167 13.1667 7.33333 13.1667Z'
				stroke='#000000'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M18.1667 16.5L13.1667 11.5'
				stroke='#000000'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
});
