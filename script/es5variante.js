/*
  x --> ora inserita dall'utente
  y --> ora calcolata in aritmetica NON modulare
  c --> numero che mi fa arrivare da x a 24
  % 24 perche siamo in aritm. modulare

  (x+c+y) % 24
*/

let x = prompt("inserire un ora");
let minuti = prompt("inserire minuti");
let oraNewYork, oraMosca, oraTokyo;
let y, c;

x = parseInt(x);
minuti = parseInt(minuti);

yNY = x - 6;
yM = x + 1;
yT = x + 9;
c = 24 - x;

if (x >= 0 && x <= 24 && minuti >= 0 && minuti < 60) {
  oraNewYork = (x + yNY + c) % 24;
  oraMosca = (x + yM + c) % 24;
  oraTokyo = (x + yT + c) % 24;

  console.log(`l'ora a New York è: ${oraNewYork}:${minuti}`);
  console.log(`l'ora a Tokyo è: ${oraTokyo}:${minuti}`);
  console.log(`l'ora a Mosca è: ${oraMosca}:${minuti}`);
} else {
  console.log("ora e minuti non corretti");
}
