let promise1 = Promise.resolve(1)
let promise2 = Promise.resolve(2)
let promise3 = Promise.reject(3)
let promise4 = Promise.resolve(4)

//Promise all Implementation

Promise.prototype.allNew = function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        results[index] = value;
        unresolved -= 1;

        if (unresolved === 0) {
          resolve(results);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
}


Promise.prototype
  .allNew([promise1, promise2, promise3, promise4])
  .then((result) => {
    console.log("Promise Implementation", result);
  })
  .catch((err) => console.log("Error in", err));
