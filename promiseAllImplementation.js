var promise1 = new Promise((resolve, reject) => {
  resolve(1);
});
var promise2 = new Promise((resolve, reject) => {
  resolve(2);
});
var promise3 = new Promise((resolve, reject) => {
  reject(3)
});

var promise4 = new Promise((resolve, reject) => {
  resolve(4);
});

// Promise.all([promise1, promise2, promise3, promise4])
//   .then((result) => {
//     console.log("Promise real", result);
//   })
//   .catch((err) => console.log("Error", err));

//Promise all Implementation

Promise.prototype.allNew = function (PromiseArray) {
  var resultArray = [];
  var promiseAll = new Promise((resolve, reject) => {
    var promiseFlag = false;
    var failed ;
    PromiseArray.map(async (iter, index) => {
      await iter
        .then((res) => {
          resultArray.push(res);
        })
        .catch((err) => {
          promiseFlag = true;
          failed = index
        });
        if(promiseFlag){
          reject(failed)
        } else {
          resolve(resultArray)
        }
    });
  });
  return promiseAll;
};

Promise.prototype
  .allNew([promise1, promise2, promise3, promise4])
  .then((result) => {
    console.log("Promise Implementation", result);
  })
  .catch((err) => console.log("Error", err));
