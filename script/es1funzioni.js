function giorniDelMese(month) {
  let monthDays = -1;
  switch (month) {
    case "febbraio":
      monthDays = 28;
      break;

    case "aprile":
    case "giugno":
    case "novembre":
    case "settembre":
      monthDays = 30;
      break;

    case "gennaio":
    case "marzo":
    case "maggio":
    case "luglio":
    case "agosto":
    case "ottobre":
    case "dicembre":
      monthDays = 31;
      break;

    default:
      console.log("inserisci un mese")
      break;
  }

  return monthDays;
}



let form = document.querySelector("#myForm")

form.addEventListener("submit", function(e){
  
  e.preventDefault()

  let inputText = document.querySelector("#user_input")
  let nDays = giorniDelMese(inputText.value.toLowerCase());

  let output = document.querySelector("#output")

  output.innerHTML = nDays === -1 ? "mese non valido" : `il mese ${inputText.value.toLowerCase()} ha ${nDays} giorni`
  /*
    equivalente di:
    if(nDays === -1){
      output.innerHTML = "mese non valido"
    }else{
      output.innerHTML =  `il mese ${inputText.value.toLowerCase()} ha ${nDays} giorni`
    }
  
  */
})