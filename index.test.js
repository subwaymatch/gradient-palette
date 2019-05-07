const GradientPalette = require("./index");

test("Hex to RGB conversion", () => {
  expect(GradientPalette.hexToRGB("#f81744")).toEqual({
    r: 248,
    g: 23,
    b: 68
  });
});

test("Hex to RGB conversion without a # prefix", () => {
  expect(GradientPalette.hexToRGB("876543")).toEqual({
    r: 135,
    g: 101,
    b: 67
  });
});

test("Hex to RGB conversion (length=3)", () => {
  expect(GradientPalette.hexToRGB("#456")).toEqual({
    r: 68,
    g: 85,
    b: 102
  });
});

test("Hex to RGB conversion (length=3) without a # prefix", () => {
  expect(GradientPalette.hexToRGB("456")).toEqual({
    r: 68,
    g: 85,
    b: 102
  });
});

test("RGB to Hex conversion", () => {
  expect(GradientPalette.rgbToHex({ r: 71, g: 141, b: 255 })).toBe("#478dff");
});

test("Palette generation", () => {
  expect(GradientPalette.generate("#e7d5ad", "#e63d92", 8)).toEqual([
    "#e7d5ad",
    "#e7bfa9",
    "#e7aaa5",
    "#e794a1",
    "#e67e9e",
    "#e6689a",
    "#e65396",
    "#e63d92"
  ]);
});

test("Palette generation (return in RGB format)", () => {
  expect(GradientPalette.generate("#e7d5ad", "#e63d92", 8, false)).toEqual([
    { r: 231, g: 213, b: 173 },
    { r: 231, g: 191, b: 169 },
    { r: 231, g: 170, b: 165 },
    { r: 231, g: 148, b: 161 },
    { r: 230, g: 126, b: 158 },
    { r: 230, g: 104, b: 154 },
    { r: 230, g: 83, b: 150 },
    { r: 230, g: 61, b: 146 }
  ]);
});

test("Palette color increment", () => {
  const increment = GradientPalette.calculateIncrement(
    { r: 231, g: 213, b: 173 },
    { r: 230, g: 61, b: 146 },
    8
  );

  expect(increment.r).toBeCloseTo(-0.142857);
  expect(increment.g).toBeCloseTo(-21.714286);
  expect(increment.b).toBeCloseTo(-3.857143);
});

test("Random RGB", () => {
  expect(GradientPalette.getRandomRGB()).toHaveProperty("r");
  expect(GradientPalette.getRandomRGB()).toHaveProperty("g");
  expect(GradientPalette.getRandomRGB()).toHaveProperty("b");
});

test("Random Hex String", () => {
  expect(GradientPalette.getRandomHex()).toMatch(/#\b[0-9a-f]{6}\b/g);
});
