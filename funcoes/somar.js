"use strict";
function somar(a, b, c) {
    let total = a + b + c;
    return total;
}
function media(soma) {
    return soma / 3;
}
let NumA = 10;
let NumB = 40;
let NumC = 30;
console.log(somar(NumA, NumB, NumC));
console.log(media(somar(NumA, NumB, NumC)));
