// function getTempPromise(loaction){
//   return new Promise(function(resolve, reject){
//     reject('city not found');
//     resolve(78);
//
//   });
// }
//
// getTempPromise("test").then(function(temp){
//   console.log(temp);
// }, function(error){
//   console.log(error);
// })

function addPromise(a,b) {
  return new Promise(function(success, unsuccess){
    if (typeof a === 'number' && typeof b === 'number') {
      success(a+b);
    } else {
      unsuccess('value you entered is not integer');
    }
  });
}

addPromise(1, 3).then(function(result){
  console.log('result :', result);
}, function(error) {
  console.log(error);
})
