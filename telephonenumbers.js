function telephoneCheck(str) {
  let myReg = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4}$)/g;
  return myReg.test(str);
}

console.log(telephoneCheck("555-555-5555"));
