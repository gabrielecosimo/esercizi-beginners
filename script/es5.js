
let ora = prompt("inserire un ora")
let minuti = prompt("inserire minuti")

ora = parseInt(ora)
minuti = parseInt(minuti)

let oraNewYork
let oraTokyo
let oraMosca

//ora New York

if (ora < 6) {
	oraNewYork = ora - 6
	oraNewYork = oraNewYork + 24
}else{
	oraNewYork = ora - 6
}

console.log(`l'ora a New York è: ${oraNewYork}:${minuti}`)

//ora Tokyo

if (ora > 8) {
	oraTokyo = ora + 8
	if (oraTokyo >= 24) {
		oraTokyo = oraTokyo - 24
	}
}else{
	oraTokyo = ora + 8
}

console.log(`l'ora a Tokyo è: ${oraTokyo}:${minuti}`)

//ora Mosca +1

if (ora > 1) {
	oraMosca = ora + 1
	if (oraMosca >= 24) {
		oraMosca = oraMosca - 24
	}
	
}else{
	oraMosca = ora + 1
}
	
console.log(`l'ora a Mosca è: ${oraMosca}:${minuti}`)