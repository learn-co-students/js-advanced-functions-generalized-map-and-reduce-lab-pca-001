// Add your functions here
 function map(array, callback) {
  const result = []
  for(const elem of array) {
    result.push(callback(elem))
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