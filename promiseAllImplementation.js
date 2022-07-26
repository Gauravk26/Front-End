let promise1 = Promise.resolve(1)
let promise2 = Promise.resolve(2)
let promise3 = Promise.reject(3)
let promise4 = Promise.resolve(4)

//Promise all Implementation

Promise.prototype.allNew = function (PromiseArray) {
   const resultArray = [];
   return new Promise((resolve, reject) => {
    let promiseFlag = false;
    let failed ;
    PromiseArray.map(async (iter, index) => {
      await iter
        .then((res) => {
          resultArray.push(res);
        })
        .catch(() => {
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
};

Promise.prototype
  .allNew([promise1, promise2, promise3, promise4])
  .then((result) => {
    console.log("Promise Implementation", result);
  })
  .catch((err) => console.log("Error in", err));
