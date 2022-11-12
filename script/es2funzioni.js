function getJudgement(mark) {
  let judgement;
  if (mark < 6) {
    judgement = "insufficente";
  } else if (mark >= 6 && mark <= 6.9) {
    judgement = "sufficente";
  } else if (mark >= 6 && mark <= 6.9) {
    judgement = "discreto"
  } else {
    judgement = "buono"
  }

  return judgement
}

let voto = prompt("inserire un voto: ")
voto = parseFloat(voto)

let giudizio

giudizio = getJudgement(voto)

console.log(`il giudizio è ${giudizio}`)