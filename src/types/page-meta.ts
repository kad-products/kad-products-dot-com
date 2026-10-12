export type PageMeta = {
	docs?: {
		type: 'docs';
		url: string;
	};
	repo?: {
		type: 'github' | 'tangled';
		url: string;
	};
};
