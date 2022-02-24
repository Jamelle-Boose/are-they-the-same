const comp = (a, b) => {
  if (!a || !b) return false

  const sortedA = a.map(num => Math.pow(num, 2)).sort((a, b) => a - b)
  const sortedB = b.sort((a, b) => a - b)

  for (let i = 0; i < sortedA.length; i++) {
    if (sortedA[i] !== sortedB[i]) return false
  }

  return true
}

module.exports = comp
