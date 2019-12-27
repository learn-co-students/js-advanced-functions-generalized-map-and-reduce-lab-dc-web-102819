let map = function (sourceArray, fun) {
  let newArray = []
  sourceArray.forEach(function(elem) {
    newArray.push(fun(elem))
  })
  return newArray
}



// function reduce(sourceArray, fun, starting) {
//   let answer
//   let newArray = []
//   // let total
//   if (starting !== undefined) {
//     answer = sourceArray.forEach(function(elem) {
//       let total = elem + elem
//     })
//     answer = answer + starting
//     newArray = fun(answer)
//   } else {
//     answer = sourceArray.forEach(function(elem) {
//       let total = elem + elem
//       newArray = fun(elem)
//     })
//   }
//   return newArray
// }

function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}
