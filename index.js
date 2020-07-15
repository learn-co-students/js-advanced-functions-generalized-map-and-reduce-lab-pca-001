// Add your functions here
const map = (arr, fcn) => {
  const ans = [];
  arr.forEach( el => ans.push(fcn(el)) );
  return ans;
}

const reduce = (arr, fcn, start=0) => {
  let e = fcn(true, true) === true ? true : start;
  arr.forEach( a => e = fcn(e,a));
  return e;
}