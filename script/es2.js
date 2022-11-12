

let voto = prompt("inserire un voto: ")
voto = parseFloat(voto)

if (voto < 6) {
	console.log("insufficente")
} else if (voto >= 6 && voto <= 6.9) {
	console.log("sufficente")
} else if (voto >= 7 && voto <= 7.9) {
	console.log("discreto")
} else{
	console.log("buono")
}

