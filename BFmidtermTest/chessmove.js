let pawnMoved = false;
function canMove(piece, from, to) {
  let op = [];
  from = from.toUpperCase();
  to = to.toUpperCase();
  if (piece == "Pawn") {
    if (
      pawnMoved == false &&
      from[0] == to[0] &&
      parseInt(from[1]) + 2 == to[1]
    ) {
      pawnMoved = true;
      return true;
    }
    if (from[0] == to[0] && parseInt(from[1]) + 1 == parseInt(to[1])) {
      return true;
    }
  }
  if (piece == "Rook") {
    if (from[1] == to[1] || from[0] == to[0]) return true;
  }
  return false;
}

// console.log(canMove("Rook", "a1", "C1"));
console.log(canMove("Pawn", "d2", "d4"));
console.log(canMove("Pawn", "a2", "a3"));
