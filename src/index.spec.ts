import * as StrToColor from './color/color';

describe("string to hex", () => {
  it("string: The quick", () => {
    expect(StrToColor.rgb('The quick')).toEqual('#28900f');
  });
});

describe("string to hex", () => {
  it("string: The quick brown fox jumps over the lazy dog", () => {
    expect(StrToColor.rgb('The quick brown fox jumps over the lazy dog')).toEqual('#133600');
  });
});

describe("get font color", () => {
  it("Get dark color", () => {
    expect(StrToColor.fontColor('#e4e2e4')).toEqual('#000000');
  });
});

describe("get font color", () => {
  it("Get light color", () => {
    expect(StrToColor.fontColor('#133600')).toEqual('#f8f8f8');
  });
});
