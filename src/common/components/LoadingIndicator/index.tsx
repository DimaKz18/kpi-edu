import { ReactNode } from 'react';
import { CentredCircularProgress } from '../CentredCircularProgress';

type Props = {
	show: boolean;
	children?: ReactNode;
	loaderClassName?: string;
	containerClassName?: string;
	size?: number;
};

export const LoadingIndicator = ({
	show,
	children,
	size,
	loaderClassName,
	containerClassName,
}: Props) => {
	return show ? (
		<CentredCircularProgress
			loaderClassName={loaderClassName}
			containerClassName={containerClassName}
			size={size}
		/>
	) : (
		<> {children} </>
	);
};
