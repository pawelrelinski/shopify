export class SegmentsUrl {
	private segments: Array<string> = [];

	constructor() {}

	public push(segment: string): void {
		this.segments.push(segment);
	}

	public toString(): string {
		return this.segments.join('/');
	}
}
