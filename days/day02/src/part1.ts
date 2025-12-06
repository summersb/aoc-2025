export function partOne(fileContent: string[]) {

  let sum = 0
  fileContent.forEach((item) => {
    const split = item.trim().split('-')
    const start = Number(split[0]);
    const end = Number(split[1]);
    for (let i = start; i <= end; i++) {
      const value = String(i)
      const left = value.slice(0, value.length / 2)
      const right = value.slice(value.length / 2)
      if (left == right) {
        sum += i
      }
    }
  })
  console.log("Part one total", sum)
}