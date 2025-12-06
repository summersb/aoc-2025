interface Return {
  num: number;
  hitZero: number;
}

export const right = (num: number, change: number): Return => {
  // First step (s) that will land on 0 when moving right is s_first = (100 - num) % 100
  // If num == 0 then the first positive step to hit 0 is 100
  const sFirst = (100 - (num % 100)) % 100 || 100;
  let hitZero = 0;
  if (change >= sFirst) {
    hitZero = 1 + Math.floor((change - sFirst) / 100);
  }
  const newNum = (num + change) % 100;
  return { num: newNum, hitZero };
};

export const left = (num: number, change: number): Return => {
  // First step (s) that will land on 0 when moving left is s_first = num % 100
  // If num == 0 then the first positive step to hit 0 is 100
  const sFirst = num % 100 || 100;
  let hitZero = 0;
  if (change >= sFirst) {
    hitZero = 1 + Math.floor((change - sFirst) / 100);
  }
  const newNum = (((num - change) % 100) + 100) % 100;
  return { num: newNum, hitZero };
};
