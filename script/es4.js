/*
Chiedere in input una temperatura in gradi Farenheit 
all'utente e mostrare l'equivalente temperatura in gradi centigradi
*/

let temperaturaF = prompt("inserire una temperatura in gradi farenheit...");
temperaturaF = parseInt(temperaturaF);

let temperaturaC = (temperaturaF - 32) * 5/9;

console.log("la temperatura è: " + temperaturaC);