export type UpdatedProfileErrors = {
	firstName?: string;
	lastName?: string;
};

export type UpdatedProfile = {
	firstName: string;
	lastName: string;
	avatar: string | null;
	isAuthor: boolean;
};

export type UpdatedProfileKey = keyof UpdatedProfile;
