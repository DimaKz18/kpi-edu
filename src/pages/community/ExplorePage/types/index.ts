export type MediaFilters = {
	specialization: string;
	type: string;
	region: string;
	rate: number;
};

export type MediaFilterKey = keyof MediaFilters;
