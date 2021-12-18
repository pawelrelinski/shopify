import { QueryStringParameters, SegmentsUrl } from '@core/utils';
import { ApiEndpointService } from '@core/services';

export class UrlBuilder {
	private url!: string;
	private queryString!: QueryStringParameters;
	private segmentOfPath!: SegmentsUrl | string;
	private apiEndpointService!: ApiEndpointService;

	constructor() {
		this.apiEndpointService = new ApiEndpointService();
		this.url = this.apiEndpointService.getDefaultApiEndpoint();
	}

	public getUrl(segmentsOfPath?: SegmentsUrl, queryString?: QueryStringParameters): string {
		this.segmentOfPath = segmentsOfPath ? segmentsOfPath.toString() : '';
		this.url = this.checkSegmentOfPath();
		this.queryString = queryString || new QueryStringParameters();
		const queryParams: string = this.checkQueryString();
		return this.checkQueryParams(queryParams);
	}

	private checkSegmentOfPath(): string {
		return this.segmentOfPath ? `${this.url}/${this.segmentOfPath}` : this.url;
	}

	private checkQueryString(): string {
		return this.queryString ? this.queryString.toString() : '';
	}

	private checkQueryParams(queryParams: string): string {
		return queryParams ? `${this.url}?${queryParams}` : this.url;
	}
}
