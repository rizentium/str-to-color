import * as StrToColor from './color/color';

describe("string to hex", () => {
  it("string: The quick", () => {
    expect(StrToColor.rgb('The quick')).toEqual('#35efff');
  });
});

describe("string to hex", () => {
  it("string: The quick brown fox jumps over the lazy dog", () => {
    expect(StrToColor.rgb('The quick brown fox jumps over the lazy dog')).toEqual('#fd9fff');
  });
});
