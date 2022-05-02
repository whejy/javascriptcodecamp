function convertToRoman(num) {
  let rom = "";
  if (num / 1000 >= 1) {
    for (let i = 0; i < Math.floor(num / 1000); i++) {
      rom += "M";
    }
    num -= 1000 * Math.floor(num / 1000);
  }
  if (num / 500 >= 1) {
    if (num - 900 <= 99 && num - 900 >= 0) {
      rom += "CM";
      num -= 900;
    } else {
      for (let i = 0; i < Math.floor(num / 500); i++) {
        rom += "D";
      }
      num -= 500 * Math.floor(num / 500);
    }
  }
  if (num / 100 >= 1) {
    if (num - 400 >= 0 && num - 400 <= 99) {
      rom += "CD";
      num -= 400;
    } else {
      for (let i = 0; i < Math.floor(num / 100); i++) {
        rom += "C";
      }
      num -= 100 * Math.floor(num / 100);
    }
  }
  if (num / 50 >= 1) {
    if (num - 90 >= 0 && num - 90 < 10) {
      rom += "XC";
      num -= 90;
    } else {
      for (let i = 0; i < Math.floor(num / 50); i++) {
        rom += "L";
      }
      num -= 50 * Math.floor(num / 50);
    }
  }
  if (num / 10 >= 1) {
    if (num - 40 >= 0 && num - 40 < 10) {
      rom += "XL";
      num -= 40;
    } else {
      for (let i = 0; i < Math.floor(num / 10); i++) {
        rom += "X";
      }
      num -= 10 * Math.floor(num / 10);
    }
  }
  if (num / 5 >= 1) {
    if (num == 9) {
      rom += "IX";
      num -= 9;
    } else {
      rom += "V";
      num -= 5;
    }
  }
  if (num == 4) {
    rom += "IV";
  } else {
    for (let i = 0; i < num; i++) {
      rom += "I";
    }
  }
  return rom;
}

console.log(convertToRoman(9));
