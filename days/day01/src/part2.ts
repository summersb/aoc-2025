import {left, right} from "./utils";
import {START_POS} from "../index";


export function partTwo(fileContent: string[]) {
  let num = START_POS;
  let password = 0;
  fileContent.forEach((line) => {
    const result =
      line[0] == "R"
        ? right(num, Number(line.substring(1)))
        : left(num, Number(line.substring(1)));
    num = result.num;
    password += result.hitZero;
  });
  console.log("part 2", password);
}
