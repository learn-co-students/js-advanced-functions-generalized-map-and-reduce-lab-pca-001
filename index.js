// Add your functions here
function map(array, callback) {
  const newArray = []
  for(const i of array) {
    newArray.push(callback(i))
  }
  return newArray
 }

 function reduce(array, callback, start) {
  let newArray = start ? start : array[0]
  let i = start ? 0 : 1
  for(const elem of array.slice(i)) {
    newArray = callback(elem, newArray)
  }
  return newArray
 }