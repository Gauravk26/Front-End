function throttle(func, timeout) {
  let timerFlag;
  return function (...args) {
    if (!timerFlag) {
      func.apply(this, args);
      timerFlag = true;
      setTimeout(() => (timerFlag = false), timeout);
    }
   
  };
}

function SayThrottle() {
  console.log("SayThrottle");
}
const ThrottleFunction = throttle(SayThrottle, 2000);
