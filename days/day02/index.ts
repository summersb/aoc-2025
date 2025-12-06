import * as fs from "fs";
import path from "path";
import { partOne } from "./src/part1"
import { partTwo } from "./src/part2"

const fileContent = fs.readFileSync(path.join(import.meta.dirname, "data/data.txt"), "utf8")

export const START_POS = 50;

interface Return {
  num: number;
  hitZero: number;
}

partOne(fileContent.split("\n"));
partTwo(fileContent.split("\n"));
