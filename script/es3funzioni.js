function calcMilliseconds(minutes, ore) {
    let mseconds = (minutes * 60 * 1000) + (ore * 60 * 60 * 1000)
    return mseconds
}

let form = document.querySelector("#myForm")

form.addEventListener("submit", function(e){

    e.preventDefault()
    let inputTextOre = document.querySelector("#user_input_ore")
    let inputTextMinuti = document.querySelector("#user_input_minuti")

    let ore = parseInt(inputTextOre.value)
    let minuti = parseInt(inputTextMinuti.value)
    let mseconds = calcMilliseconds(minuti, ore)

    let output = document.querySelector("#output")

    output.innerHTML = `in ${minuti} minuti e ${ore} ore ci sono ${mseconds} millisecondi`
})