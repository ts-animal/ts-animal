import * as Charm from "charm";
import * as fs from "fs";
import * as path from "path";

import chalk = require("chalk");

const charm = Charm();
charm.pipe(process["stdout"]);

const frames = [];
const folder = fs.readdirSync("./src/rabbit/frames");
for (const filePath of folder) {
  frames.push(
    fs.readFileSync(path.join("./src/rabbit/frames", filePath), "utf8"),
  );
}

const log = console.log;
let i = 0;
setInterval(() => {
  const hex =
    "#" +
    ((size) =>
      [...Array(size)]
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join(""))(6);

  charm.reset();
  log(chalk.hex(hex).bold(frames[i % frames.length]));
  i++;
}, 200);
