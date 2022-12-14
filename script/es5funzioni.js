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

	let output1 = document.querySelector("#p1");
	let output2 = document.querySelector("#p2");
	let output3 = document.querySelector("#p3");
	let output = document.querySelector("#output");

	let oraNewYork, oraMosca, oraTokyo;
	let tzNY, tzMo, tzTo;

	tzNY = -6;
	tzMo = 1;
	tzTo = 9;

	if (ore >= 0 && ore <= 24 && minuti >= 0 && minuti < 60) {
		oraNewYork = calcTimeZone(ore, tzNY);
		oraMosca = calcTimeZone(ore, tzMo);
		oraTokyo = calcTimeZone(ore, tzTo);

		output1.innerHTML = `l'ora a New York è: ${oraNewYork}: ${minuti}`;
		output2.innerHTML = `l'ora a Tokyo è: ${oraTokyo}:${minuti}`;
		output3.innerHTML = `l'ora a Mosca è: ${oraMosca}:${minuti}`;
	} else {
		output.innerHTML = "ora e minuti non corretti"
	}
});
