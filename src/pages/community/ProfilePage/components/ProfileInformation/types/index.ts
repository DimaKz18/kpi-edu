export type UpdatedProfileErrors = {
	firstName?: string;
	lastName?: string;
};

export type UpdatedProfile = {
	firstName: string;
	lastName: string;
	avatar: string | null;
};

export type UpdatedProfileKey = keyof UpdatedProfile;
