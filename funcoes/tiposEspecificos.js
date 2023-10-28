"use strict";
// Array com implementação igual ao JS
let hobbies = ["ler", "filmes", "Games"];
console.log(hobbies);
console.log(typeof hobbies);
// Implementação exclusiva do TS
let contato = ['Paulo', 'psilva@email.com', 1121212121, true];
console.log(contato);
console.log(typeof contato);
// Implementação de um array controlado
let endereco = ['Av. da paz', 7715, 'Zona Rural'];
console.log(endereco);
// Implementação de um Enum
var semafaro;
(function (semafaro) {
    semafaro[semafaro["verde"] = 0] = "verde";
    semafaro[semafaro["amarelo"] = 1] = "amarelo";
    semafaro[semafaro["vermelho"] = 2] = "vermelho";
})(semafaro || (semafaro = {}));
;
const siga = semafaro.verde;
const atencao = semafaro.amarelo;
const pare = semafaro.vermelho;
console.log(siga);
console.log(atencao);
console.log(pare);
