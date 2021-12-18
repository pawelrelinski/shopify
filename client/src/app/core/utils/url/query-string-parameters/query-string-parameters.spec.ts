import { QueryStringParameters } from '@core/utils';

describe('QueryStringParameters', () => {
	it('should create an instance', () => {
		expect(new QueryStringParameters()).toBeTruthy();
	});

	it('should add an element to params array', () => {
		const queryStringParameters = new QueryStringParameters();
		queryStringParameters.push('mode', 'dev');
		expect(queryStringParameters.toString()).toBe('mode=dev');
	});

	it('should to combine a few param elements', () => {
		const queryStringParameters = new QueryStringParameters();
		queryStringParameters.push('mode', 'dev');
		queryStringParameters.push('data', 'true');
		queryStringParameters.push('user', '123');
		expect(queryStringParameters.toString()).toBe('mode=dev&data=true&user=123');
	});
});
