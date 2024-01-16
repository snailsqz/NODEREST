function isValidIP(txt) {
  let ip = [];
  let checkDot = 0;
  for (let i = 0; i < txt.length; i++) if (txt[i] == ".") checkDot++;
  if (checkDot != 3) return false;
  ip = txt.split("");
  let temp = "";
  for (let i = 0; i < txt.length; i++) {
    if (ip[i] != ".") {
      temp += ip[i];
    } else {
      if (temp > 255) return false;
      if (temp[0] == 0) return false;
      temp = "";
    }
    if (i == txt.length - 1) {
      if (temp > 255) return false;
      if (temp[0] == 0) return false;
    }
  }
  return true;
}

console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));
