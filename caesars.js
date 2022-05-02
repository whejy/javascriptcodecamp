function rot13(str) {
  return str
    .split("")
    .map((letter) => {
      if (letter.charCodeAt() > 64 && letter.charCodeAt() < 91) {
        let replacement = letter.charCodeAt() + 13;
        if (replacement > 90) {
          let temp = replacement - 90;
          replacement = 64 + temp;
        }
        letter = String.fromCharCode(replacement);
      }
      return letter;
    })
    .join("");
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
