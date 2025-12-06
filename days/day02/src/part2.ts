export function partTwo(fileContent: string[]) {

  let sum = 0
  fileContent.forEach((item) => {
    const split = item.trim().split('-')
    const start = Number(split[0]);
    const end = Number(split[1]);
    for (let i = start; i <= end; i++) {
      const value = String(i)
      // split value by 1,2,3,1/2 total size
      const size = Math.ceil(value.length / 2)
      for (let chunkSize = 1; chunkSize <= size; chunkSize++) {
        const array = []
        for (let k = 0; k < value.length; k+=chunkSize) {
          array.push(value.slice(k, k+chunkSize))
        }
        if (array.length < 2) {
          continue
        }
        const startNum = array[0]
        let same = true
        for (let i = 1; i < array.length; i++) {
          if (array[i] != startNum) {
            same = false
            break
          }
        }
        if (same) {
          sum += Number(value)
          break
        }
      }
    }
  })
  console.log("Part two total", sum)
}
