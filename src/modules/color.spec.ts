import * as StrToString from './color'

describe("string to hex", () => {
  it("string: The quick", () => {
    expect(StrToString.rgb('The quick')).toEqual('#35efff');
  });
});

describe("string to hex", () => {
  it("string: The quick brown fox jumps over the lazy dog", () => {
    expect(StrToString.rgb('The quick brown fox jumps over the lazy dog')).toEqual('#fd9fff');
  });
});
