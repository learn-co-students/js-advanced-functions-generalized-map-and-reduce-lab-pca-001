function map(sourceArray, callback) {
  const result = []
  for(const element of sourceArray) {
    result.push(callback(element))
  }
  return result
 }

 function reduce(array, callback, start) {
  let result = start ? start : array[0]
  let i = start ? 0 : 1
  for(const elem of array.slice(i)) {
    result = callback(elem, result)
  }
  return result
 }