function capToFront(text) {
  let txt = text.split("");
  let op = "";

  for (let i = 0; i < txt.length; i++) {
    if (txt[i] == txt[i].toUpperCase()) {
      op += txt[i];
    }
  }

  for (let i = 0; i < txt.length; i++) {
    if (txt[i] != txt[i].toUpperCase()) {
      op += txt[i];
    }
  }

  return op;
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));
