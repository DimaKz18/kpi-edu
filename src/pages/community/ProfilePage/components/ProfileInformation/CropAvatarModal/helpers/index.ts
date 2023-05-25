export const AVATAR_SIZE = 200;

export const animationVariants = {
	initial: {
		opacity: 0,
		zIndex: -1,
	},
	show: {
		opacity: 1,
		zIndex: 1,
	},
	hide: {
		opacity: 0,
		transitionEnd: {
			zIndex: -1,
		},
	},
};
