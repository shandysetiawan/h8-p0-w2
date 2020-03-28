function konversiMenit(menit) {
  var hour = menit / 60;
  var bulatHour = Math.floor(hour);
  var bulatMinute = (hour - bulatHour) * 60;
  var result = (bulatMinute < 10 ? "0" : "") + Math.round(bulatMinute);
  return `${bulatHour}:${result}`;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
