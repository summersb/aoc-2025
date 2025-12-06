import {left, right} from "./utils";
import {START_POS} from "../index";

export function partOne(fileContent: string[]) {
  let num = START_POS;
  let password = 0;
  fileContent.forEach((line) => {
    const result =
      line[0] == "R"
        ? right(num, Number(line.substring(1)))
        : left(num, Number(line.substring(1)));
    num = result.num;
    if (num == 0) {
      password++;
    }
  });
  console.log("part 1", password);
}
