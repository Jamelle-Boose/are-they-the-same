const comp = require("./index.js")

describe("Are they the same", () => {
  it("return true if squared numbers are in order", () => {
    a1 = [1, 4, 9, 16]
    a2 = [1 * 1, 4 * 4, 9 * 9, 16 * 16]
    expect(comp(a1, a2)).toBe(true)
  })

  it("return true if squared numbers are out of order", () => {
    a1 = [4, 1, 3, 2]
    a2 = [1 * 1, 2 * 2, 3 * 3, 4 * 4]
    expect(comp(a1, a2)).toBe(true)
  })

  it("return false if first array is null", () => {
    a1 = null
    a2 = [1 * 1, 2 * 2, 3 * 3, 4 * 4]
    expect(comp(a1, a2)).toBe(false)
  })

  it("return false if second array is null", () => {
    a1 = [3, 5, 2, 12]
    a2 = null
    expect(comp(a1, a2)).toBe(false)
  })

  it("return false if not the square of any number in array b", () => {
    a1 = [121, 144, 19, 161, 19, 144, 19, 11]
    a2 = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
    expect(comp(a1, a2)).toBe(false)
  })

  it("return false if number is not the square root of any number in array a", () => {
    a1 = [121, 144, 19, 161, 19, 144, 19, 11]
    a2 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
    expect(comp(a1, a2)).toBe(false)
  })

  it("should work with random inputs", () => {
    a1 = [0, 10, 1, 5, 2, 10, 0, 7, 0, 8, 9, 0, 0, 0, 2, 9, 10, 6, 10, 2]
    a2 = [
      0, 100, 4, 1, 100, 100, 0, 64, 36, 0, 49, 0, 4, 81, 25, 0, 100, 1, 81, 4,
    ]
    expect(comp(a1, a2)).toBe(false)
  })
})
