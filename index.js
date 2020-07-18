function map(array, functionWePass) {
  const freshArray = []
  for (const jawn of array) {
    freshArray.push(functionWePass(jawn))
  }
  return freshArray
}

function reduce(array, functionWePass, starting_value) {
  let freshArray = starting_value ? starting_value : array[0]
  let jawn = starting_value ? 0 : 1
  for (const element of array.slice(jawn)) {
    freshArray = functionWePass(element, freshArray)
  }
  return freshArray
}