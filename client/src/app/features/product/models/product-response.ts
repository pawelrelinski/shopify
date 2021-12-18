export interface ProductResponse {
	type: string;
	id: number | string;
	attributes: {
		name: string;
		description: string;
		amount: number;
		price: number;
		createdAt: {
			date: string;
			timezone_type: number;
			timezone: string;
		};
		category: string;
		color: string;
	};
}
