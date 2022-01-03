import { FirstLetterTitleCasePipe } from './first-letter-title-case.pipe';

describe('FullTitleCasePipe', () => {
  it('create an instance', () => {
    const pipe = new FirstLetterTitleCasePipe();
    expect(pipe).toBeTruthy();
  });
});
