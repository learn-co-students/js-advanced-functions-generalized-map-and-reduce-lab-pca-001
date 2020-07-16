// Add your functions here
function map(sourceArray, func) {
  let newArray = []
  sourceArray.forEach(element => { newArray.push(func(element)) })
  return newArray
}

function reduce(sourceArray, func, startingPoint) {
  let memo = startingPoint ? startingPoint : sourceArray[0]
  let i = startingPoint ? 0 : 1

  sourceArray.slice([i]).forEach(element => { memo = func(element, memo) })
  return memo
}