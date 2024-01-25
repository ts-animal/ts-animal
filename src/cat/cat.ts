import * as Charm from "charm";
import * as fs from "fs";
import * as path from "path";

import chalk = require("chalk");

const charm = Charm();
charm.pipe(process["stdout"]);

const frames = [];
const folder = fs.readdirSync("./src/cat/frames");
for (const filePath of folder) {
  frames.push(fs.readFileSync(path.join("./src/cat/frames", filePath), "utf8"));
}

const log = console.log;
let i = 0;

setInterval(() => {
  // A. colorize
  const hexColor = generateRandomHexColor();
  const bgHexColor = generateRandomPastelColor();

  // B. InterpolateColor
  // const factor = (i % frames.length) / frames.length; // 0 to 1
  // const hexColor1 = generateRandomInterpolateColor(factor);
  // const hexColor2 = generateRandomInterpolateColor(factor + 0.5);

  charm.reset();
  log(
    chalk
      .hex(hexColor)
      .bgHex(bgHexColor)
      .bold(frames[i % frames.length])
  );
  i++;
}, 300);

// A. Colorize
/** generateRandomHexColor */
function generateRandomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

/** Generate a random pastel color */
function generateRandomPastelColor() {
  const pastel = () => Math.floor(Math.random() * 155) + 100;
  return `#${pastel().toString(16)}${pastel().toString(16)}${pastel().toString(
    16
  )}`;
}

// B. InterpolateColor
/** Generate a random hex color with a factor for gradual change */
function generateRandomInterpolateColor(factor) {
  const interpolate = (c1, c2, f) => Math.round(c1 + (c2 - c1) * f);
  const randomColor = () => Math.floor(Math.random() * 16777215); // Random 24-bit color

  const r = interpolate(
    (randomColor() >> 16) & 0xff,
    (randomColor() >> 16) & 0xff,
    factor
  );
  const g = interpolate(
    (randomColor() >> 8) & 0xff,
    (randomColor() >> 8) & 0xff,
    factor
  );
  const b = interpolate(randomColor() & 0xff, randomColor() & 0xff, factor);

  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}
