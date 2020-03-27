function xo(str) {
  var hug = 0;
  var kiss = 0;
  for (var index = 0; index < str.length; index++) {
    if (str[index] == "x") {
      kiss++;
    } else hug++;
  }
  if (hug !== kiss) {
    return false;
  } else {
    return true;
  }
}

// // TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
