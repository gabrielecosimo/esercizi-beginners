function convertTemp(tempF) {
	let tempC;
	tempC = ((tempF - 32) * 5) / 9;

	return tempC;
}

let temperaturaF = prompt("inserisci temperatura in faren.");

temperaturaF = parseFloat(temperaturaF)
let temperaturaC

temperaturaC = convertTemp(temperaturaF)

console.log(`la temperatura in gradi F --> ${temperaturaF}, in gradi C è --> ${temperaturaC}`)