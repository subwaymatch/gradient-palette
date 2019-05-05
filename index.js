const GradientPalette = {};

/**
 * Convert a hexadecimal color value to RGB
 *
 * @param hex Hexadecimal color value
 * @returns {{r: Number, g: Number, b: Number}}
 */
GradientPalette.hexToRGB = hex => {
  let r, g, b;

  // If the hex value begins with a sharp(#) character,
  // get the other part
  if (hex.startsWith("#")) {
    hex = hex.substring(1, hex.length);
  }

  // If a three-digit RGB notation (#rgb) is passed,
  // convert it to a six-digit form (#rrggbb) by replicating digits
  if (hex.length === 3) {
    r = parseInt(hex.substring(0, 1), 16);
    g = parseInt(hex.substring(1, 2), 16);
    b = parseInt(hex.substring(2, 3), 16);

    r = r * 16 + r;
    g = g * 16 + g;
    b = b * 16 + b;
  } else {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  }

  return {
    r: r,
    g: g,
    b: b
  };
};

/**
 * Convert a RGB color value to hexadecimal
 *
 * @param rgbObj RGB color object
 * @returns {string} Hex color value
 */
GradientPalette.rgbToHex = rgbObj => {
  let r = rgbObj.r.toString(16);
  let g = rgbObj.g.toString(16);
  let b = rgbObj.b.toString(16);

  r = r.length > 1 ? r : "0" + r;
  g = g.length > 1 ? g : "0" + g;
  b = b.length > 1 ? b : "0" + b;

  return r + g + b;
};

/**
 * Calculate increment given two colors and number of gradient steps
 *
 * @param beginRGB Begin RGB
 * @param endRGB End RGB
 * @param numSteps Number of steps
 * @returns {{r: number, g: number, b: number}}
 */
GradientPalette.calculateIncrement = (beginRGB, endRGB, numSteps) => ({
  r: (endRGB.r - beginRGB.r) / (numSteps - 1),
  g: (endRGB.g - beginRGB.g) / (numSteps - 1),
  b: (endRGB.b - beginRGB.b) / (numSteps - 1)
});

/**
 * Generate and return a random RGB object
 *
 * @returns {{r: Number, g: Number, b: Number}}
 */
GradientPalette.getRandomRGB = () => ({
  r: Math.floor(Math.random() * 256),
  g: Math.floor(Math.random() * 256),
  b: Math.floor(Math.random() * 256)
});

/**
 * Calculate color steps in the gradient
 *
 * @param beginRGB Begin RGB
 * @param endRGB End RGB
 * @param numSteps Number of steps
 * @param shouldReturnHexArray Whether the return should be an array of hex value
 * @returns {Array}
 */
GradientPalette.calculateSteps = (
  beginRGB,
  endRGB,
  numSteps,
  shouldReturnHexArray = true
) => {
  // Check and convert hex values to RGB
  beginRGB =
    typeof beginRGB === "string"
      ? GradientPalette.hexToRGB(beginRGB)
      : beginRGB;
  endRGB =
    typeof endRGB === "string" ? GradientPalette.hexToRGB(endRGB) : endRGB;

  const rgbIncrement = GradientPalette.calculateIncrement(
    beginRGB,
    endRGB,
    numSteps
  );

  const steps = [];

  let r, g, b;

  // Generate actual colors and append
  for (let i = 0; i < numSteps; i++) {
    r = beginRGB.r + Math.round(i * rgbIncrement.r);
    g = beginRGB.g + Math.round(i * rgbIncrement.g);
    b = beginRGB.b + Math.round(i * rgbIncrement.b);

    if (shouldReturnHexArray === true) {
      steps.push(
        GradientPalette.rgbToHex({
          r: r,
          g: g,
          b: b
        })
      );
    } else {
      steps.push({
        r: r,
        g: g,
        b: b
      });
    }
  }

  return steps;
};

/**
 * Get a random gradient steps set
 *
 * @param numSteps
 * @returns {Array}
 */
GradientPalette.getRandomSteps = numSteps => {
  // Validity check for number of gradient steps
  if (numSteps < 1) numSteps = 1;

  return GradientPalette.calculateSteps(
    GradientPalette.getRandomRGB(),
    GradientPalette.getRandomRGB(),
    numSteps
  );
};

module.exports = GradientPalette;
