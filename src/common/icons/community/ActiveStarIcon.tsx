import { memo } from 'react';

type Props = {
	className?: string;
	onClick?: () => void;
};

export const ActiveStarIcon = memo(({ className, onClick }: Props) => {
	return (
		<svg
			className={className}
			onClick={onClick}
			width='22'
			height='22'
			viewBox='0 0 22 22'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M21.9279 8.28704C21.8453 8.01478 21.6862 7.7744 21.471 7.59681C21.2557 7.41922 20.9942 7.31255 20.7201 7.29052L14.7752 6.75696C14.7392 6.75329 14.7049 6.73958 14.6758 6.71728C14.6468 6.69498 14.6241 6.66493 14.6102 6.63032L12.2876 0.883703C12.18 0.621549 12.0006 0.398011 11.7716 0.240891C11.5427 0.0837699 11.2743 0 10.9998 0C10.7254 0 10.4569 0.0837699 10.228 0.240891C9.99902 0.398011 9.8196 0.621549 9.71203 0.883703L7.38944 6.63032C7.37552 6.66493 7.35283 6.69498 7.32379 6.71728C7.29474 6.73958 7.26042 6.75329 7.22447 6.75696L1.2795 7.29052C1.00539 7.31255 0.743904 7.41922 0.528666 7.59681C0.313429 7.7744 0.154287 8.01478 0.0717112 8.28704C-0.015744 8.55968 -0.0233833 8.85312 0.0497592 9.13027C0.122902 9.40741 0.273542 9.65583 0.48264 9.84411L4.99285 13.9288C5.02047 13.9543 5.04098 13.987 5.05224 14.0235C5.0635 14.06 5.06509 14.099 5.05684 14.1364L3.70108 20.21C3.63788 20.4897 3.65591 20.7825 3.75289 21.0515C3.84988 21.3205 4.02146 21.5536 4.24598 21.7214C4.46702 21.8907 4.73187 21.9874 5.00634 21.9988C5.28081 22.0103 5.55228 21.9361 5.78572 21.7858L10.8958 18.5678C10.9259 18.5485 10.9605 18.5383 10.9958 18.5383C11.0311 18.5383 11.0658 18.5485 11.0958 18.5678L16.2059 21.7858C16.4418 21.9357 16.7151 22.0097 16.9914 21.9985C17.2678 21.9873 17.5347 21.8913 17.7586 21.7228C17.9825 21.5542 18.1532 21.3206 18.2493 21.0513C18.3454 20.7821 18.3625 20.4893 18.2985 20.21L16.9468 14.1343C16.9385 14.097 16.9401 14.058 16.9514 14.0214C16.9626 13.9849 16.9831 13.9522 17.0108 13.9267L21.521 9.84203C21.729 9.65343 21.8786 9.40515 21.951 9.12845C22.0234 8.85175 22.0154 8.559 21.9279 8.28704ZM20.7281 8.90156L16.2179 12.9863C16.0257 13.1599 15.8828 13.3846 15.8046 13.6363C15.7264 13.888 15.7158 14.1571 15.774 14.4146L17.1257 20.4903C17.1357 20.5311 17.1335 20.5741 17.1194 20.6136C17.1053 20.6531 17.08 20.6872 17.0468 20.7114C17.0167 20.7364 16.9797 20.7508 16.9412 20.7525C16.9028 20.7541 16.8648 20.743 16.8328 20.7207L11.7227 17.5028C11.5048 17.3653 11.2548 17.2926 10.9998 17.2926C10.7449 17.2926 10.4948 17.3653 10.2769 17.5028L5.16682 20.7207C5.13484 20.743 5.09685 20.7541 5.05837 20.7525C5.01989 20.7508 4.98293 20.7364 4.95286 20.7114C4.91965 20.6872 4.8943 20.6531 4.8802 20.6136C4.86609 20.5741 4.86388 20.5311 4.87387 20.4903L6.22564 14.4146C6.28384 14.1571 6.27325 13.888 6.19502 13.6363C6.1168 13.3846 5.97389 13.1599 5.78172 12.9863L1.2715 8.90156C1.24066 8.87433 1.2185 8.83801 1.20797 8.79742C1.19743 8.75682 1.19902 8.71387 1.21251 8.67423C1.22261 8.63476 1.2445 8.59963 1.27504 8.57389C1.30558 8.54815 1.3432 8.53312 1.38248 8.53098L7.32845 7.99742C7.583 7.97491 7.82676 7.88049 8.03332 7.72441C8.23987 7.56833 8.40135 7.35653 8.50024 7.11197L10.8228 1.36536C10.839 1.32969 10.8646 1.29953 10.8966 1.27841C10.9287 1.25728 10.9658 1.24607 11.0038 1.24607C11.0418 1.24607 11.0789 1.25728 11.111 1.27841C11.143 1.29953 11.1686 1.32969 11.1848 1.36536L13.4994 7.11197C13.598 7.35595 13.7588 7.56735 13.9646 7.72339C14.1704 7.87943 14.4133 7.97418 14.6672 7.99742L20.6131 8.53098C20.6524 8.53312 20.69 8.54815 20.7206 8.57389C20.7511 8.59963 20.773 8.63476 20.7831 8.67423C20.7971 8.71346 20.7993 8.75616 20.7895 8.79672C20.7797 8.83729 20.7583 8.87383 20.7281 8.90156Z'
				fill='#205295'
			/>
			<path
				d='M20.7281 8.90156L16.2179 12.9863C16.0257 13.1599 15.8828 13.3846 15.8046 13.6363C15.7264 13.888 15.7158 14.1571 15.774 14.4146L17.1257 20.4903C17.1357 20.5311 17.1335 20.5741 17.1194 20.6136C17.1053 20.6531 17.08 20.6872 17.0468 20.7114C17.0167 20.7364 16.9797 20.7508 16.9412 20.7525C16.9028 20.7541 16.8648 20.743 16.8328 20.7207L11.7227 17.5028C11.5048 17.3653 11.2548 17.2926 10.9998 17.2926C10.7449 17.2926 10.4948 17.3653 10.2769 17.5028L5.16682 20.7207C5.13484 20.743 5.09685 20.7541 5.05837 20.7525C5.01989 20.7508 4.98293 20.7364 4.95286 20.7114C4.91965 20.6872 4.8943 20.6531 4.8802 20.6136C4.86609 20.5741 4.86388 20.5311 4.87387 20.4903L6.22564 14.4146C6.28384 14.1571 6.27325 13.888 6.19502 13.6363C6.1168 13.3846 5.97389 13.1599 5.78172 12.9863L1.2715 8.90156C1.24066 8.87433 1.2185 8.83801 1.20797 8.79742C1.19743 8.75682 1.19902 8.71387 1.21251 8.67423C1.22261 8.63476 1.2445 8.59963 1.27504 8.57389C1.30558 8.54815 1.3432 8.53312 1.38248 8.53098L7.32845 7.99742C7.583 7.97491 7.82676 7.88049 8.03332 7.72441C8.23987 7.56833 8.40135 7.35653 8.50024 7.11197L10.8228 1.36536C10.839 1.32969 10.8646 1.29953 10.8966 1.27841C10.9287 1.25728 10.9658 1.24607 11.0038 1.24607C11.0418 1.24607 11.0789 1.25728 11.111 1.27841C11.143 1.29953 11.1686 1.32969 11.1848 1.36536L13.4994 7.11197C13.598 7.35595 13.7588 7.56735 13.9646 7.72339C14.1704 7.87943 14.4133 7.97418 14.6672 7.99742L20.6131 8.53098C20.6524 8.53312 20.69 8.54815 20.7206 8.57389C20.7511 8.59963 20.773 8.63476 20.7831 8.67423C20.7971 8.71346 20.7993 8.75616 20.7895 8.79672C20.7797 8.83729 20.7583 8.87383 20.7281 8.90156Z'
				fill='#205295'
			/>
		</svg>
	);
});
