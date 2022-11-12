function convertTemp(tempF) {
	let tempC;
	tempC = ((tempF - 32) * 5) / 9;

	return tempC;
}

let form = document.querySelector("#myForm")

form.addEventListener("submit", function(e){

	e.preventDefault()

	let inputText = document.querySelector("#user_input")

	let temperaturaF = parseFloat(inputText.value)
	let temperaturaC = convertTemp(temperaturaF)

	let output = document.querySelector("#output");
	output.innerHTML = `la temperatura in gradi F --> ${temperaturaF}, in gradi C è --> ${temperaturaC}`
	
})