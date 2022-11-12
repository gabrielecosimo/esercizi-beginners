
let mese = prompt("inserire un mese: ")
mese = mese.toLowerCase()

/*
if (mese.toLowerCase() === "febbraio") {
	console.log("il mese ha 28 giorni")
} else if (mese.toLowerCase() === "novembre" || mese.toLowerCase() === "aprile" || mese.toLowerCase() === "giugno" || mese.toLowerCase() === "setetmbre") {
	console.log("il mese ha 30 giorni")
} else if(mese.toLowerCase) { //continuare
	console.log("il mese ha 31 giorni")
}

*/

switch (mese) {
	case "febbraio":
		console.log(`${mese} ha 28 giorni`)
		break;

	case "aprile":
	case "giugno":
	case "novembre":
	case "settembre":
		console.log(`${mese} ha 30 giorni`);
		break;

	case "gennaio":
	case "marzo":
	case "maggio":
	case "luglio":
	case "agosto":
	case "ottobre":
	case "dicembre":
		console.log(`${mese} ha 31 giorni`);
		break;

	default:
		console.log("inserisci un mese");
		break;
}

