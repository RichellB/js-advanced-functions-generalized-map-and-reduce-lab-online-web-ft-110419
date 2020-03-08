// Add your functions here

function map(src, callbackF) {
  let arr = []

  for (let i = 0; i < src.length; i++) {
    let element = src[i]
    arr.push(callbackF(element))
  }

  return arr;
}

function reduce(src, callbackF, startingP){
  let arr = (startingP) ? startingP : src[0]
  let i = (startingP) ? 0 : 1

  for ( i < src.length; i++) {
    arr = callbackF(src[i], arr)
  }

  return arr;
}