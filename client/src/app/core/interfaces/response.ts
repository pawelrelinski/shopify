export interface Response<T> {
	status: number;
	links: {
		previous?: string;
		self?: string;
		next?: string;
	};
	data: T;
}
