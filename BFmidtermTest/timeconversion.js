function digitalClock(time) {
  let op = [];
  let txt = "";
  op.push(Math.floor(time / 60 / 60) % 24);
  op.push(Math.floor((time / 60) % 60));
  op.push(time % 60);

  for (let i = 0; i < op.length; i++) {
    if (op[i] < 10) txt += 0;
    txt += op[i] + ":";
  }
  txt = txt.slice(0, txt.length - 1);

  return txt;
}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));
