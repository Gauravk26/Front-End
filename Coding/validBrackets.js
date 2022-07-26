const strInput = "{}";
function isValidString(str) {
  const map = new Map();
  map.set("{", "}");
  const arr = [];
  for (const element of str) {
    if (map.has(element)) {
      arr.push(element);
    } else {
      let pop = arr.pop();
      if (map.get(pop) !== element) {
        return false;
      }
    }
  }
  return arr.length === 0;
}
console.log("isValidString", isValidString("{"));
console.log("isValidString", isValidString("{{"));
console.log("isValidString", isValidString("}}"));
console.log("isValidString", isValidString("{{}"));
