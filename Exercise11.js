function balikKata(kata) {
  var temp = "";
  for (var index = kata.length - 1; index >= 0; index--) {
    temp = temp + kata[index];
  }
  return temp;
}

// TEST CASES
console.log(balikKata("Hello World and Coders")); // sredoC dna dlroW olleH
console.log(balikKata("John Doe")); // eoD nhoJ
console.log(balikKata("I am a bookworm")); // mrowkoob a ma I
console.log(balikKata("Coding is my hobby")); // ybboh ym si gnidoC
console.log(balikKata("Super")); // repuS
