export class Product {
	constructor(
		public id: number,
		private name: string,
		private description: string,
		private amount: number,
		private price: number
	) {}

	public getId(): number {
		return this.id;
	}

	public getName(): string {
		return this.name;
	}

	public getDescription(): string {
		return this.description;
	}

	public getAmount(): number {
		return this.amount;
	}

	public getPrice(): number {
		return this.price;
	}
}
