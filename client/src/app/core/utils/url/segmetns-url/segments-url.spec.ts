import {SegmentsUrl} from '@core/utils';

describe('SegmentsUrl', () => {
  it('should create an instance', () => {
    expect(new SegmentsUrl()).toBeTruthy();
  });

  it('should add a segment', () => {
    const segmentsUrl = new SegmentsUrl();
    segmentsUrl.push('12');
    expect(segmentsUrl.toString()).toBe('12');
  });

  it('should to combine a few segment elements', () => {
    const segmentsUrl = new SegmentsUrl();
    segmentsUrl.push('user');
    segmentsUrl.push('12');
    segmentsUrl.push('add');
    expect(segmentsUrl.toString()).toBe('user/12/add');
  });
});
