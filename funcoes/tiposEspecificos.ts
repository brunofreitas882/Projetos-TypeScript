 // Array com implementação igual ao JS
 let hobbies = ["ler", "filmes", "Games"];
 console.log(hobbies);
 console.log(typeof hobbies);

 // Implementação exclusiva do TS
 let contato: any[] = ['Paulo', 'psilva@email.com', 1121212121, true];
 console.log(contato);
 console.log(typeof contato);

 // Implementação de um array controlado
let endereco: [string, number, string] = ['Av. da paz', 7715, 'Zona Rural'];
console.log(endereco);

// Implementação de um Enum
enum semafaro{
    verde,
    amarelo,
    vermelho
};

const siga: semafaro = semafaro.verde
const atencao: semafaro = semafaro.amarelo;
const pare: semafaro = semafaro.vermelho;

console.log(siga);
console.log(atencao);
console.log(pare);