/*
    h --> ora inserita dell'utente
    tz --> numero di ore in cui ci vogliamo spostare
    y --> ora calcolata normalmente
    c --> numero che mi fa arrivare da x a 24
		prima fare la conversione a intero
		dell'input, prima di passare gli 
		argomenti alla funizone
*/

function calcTimeZone(h, tz) {
	let y = h + tz;
	let c = 24 - h;

	let oraFusa = (h + c + y) % 24;

	return oraFusa;
}

let form = document.querySelector("#myForm");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	let inputTextOre = document.querySelector("#user_input_ore");
	let inputTextMinuti = document.querySelector("#user_input_minuti");

	let ore = parseInt(inputTextOre.value);
	let minuti = parseInt(inputTextMinuti.value);

	let output = document.querySelector("#output");

	let oraNewYork, oraMosca, oraTokyo;
	let tzNY, tzMo, tzTo;

	tzNY = -6;
	tzMo = 1;
	tzTo = 9;

	if (ora >= 0 && ora <= 24 && minuti >= 0 && minuti < 60) {
		oraNewYork = calcTimeZone(ora, tzNY);
		oraMosca = calcTimeZone(ora, tzMo);
		oraTokyo = calcTimeZone(ora, tzTo);

		output.innerHTML = `l'ora a New York è: ${oraNewYork}:${minuti}`;
		output.innerHTML = `l'ora a Tokyo è: ${oraTokyo}:${minuti}`;
		output.innerHTML = `l'ora a Mosca è: ${oraMosca}:${minuti}`;
	} else {
		output.innerHTML = "ora e minuti non corretti"
	}
});
