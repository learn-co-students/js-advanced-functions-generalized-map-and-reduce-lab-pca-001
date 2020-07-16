// Add your functions here
function map(sourceArray, callBackfunc) {
  let newArray = []
  for (let index = 0; index < sourceArray.length; index++) {
    let something = sourceArray[index]
    newArray.push(callBackfunc(something))
  }
  return newArray
}

function reduce(sourceArray, callBackfunc, startingPoint){
  // if (!!startingPoint) {
  //   let newArray = startingPoint
  // } else {
  //   let newArray = sourceArray[0]
  // }
  // if (!!startingPoint) {
  //   let index = 0
  // } else {
  //   let index = 1
  // }
  let newArray = (!!startingPoint) ? startingPoint : sourceArray[0]
  let index = (!!startingPoint) ? 0 : 1
  for (const element of sourceArray.slice(index)) {
    newArray = callBackfunc(element, newArray)
  }
  return newArray
}