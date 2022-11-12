function getJudgement(mark) {
  let judgement;
  if (mark < 6) {
    judgement = "insufficente";
  } else if (mark >= 6 && mark <= 6.9) {
    judgement = "sufficente";
  } else if (mark >= 7 && mark <= 7.9) {
    judgement = "discreto"
  } else {
    judgement = "buono"
  }

  return judgement
}







let form = document.querySelector("#myForm")

form.addEventListener("submit", function(e){
  
  e.preventDefault()
  let inputText = document.querySelector("#user_input")

  let voto = parseFloat(inputText.value)

  let giudizio
  giudizio = getJudgement(voto)

  let output = document.querySelector("#output")
  output.innerHTML = voto > 10 || voto < 0 ? "voto non valido" : `il giudizio è ${giudizio}`
})