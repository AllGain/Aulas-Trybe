const pai = document.getElementById('pai');
const irmao = document.createElement('section');
irmao.id = 'irmaoElemento';
pai.appendChild(irmao);

const euTo = document.getElementById('elementoOndeVoceEsta'); //variavel que  guarda elemento pai
const filho = document.createElement('section'); //criando a estrutura section
filho.id = 'filhoEuTo'; //criando Id para o filho
euTo.appendChild(filho);

const primeFiDoFi = document.getElementById('primeiroFilhoDoFilho');
const fiDofi = document.createElement('section');
fiDofi.id = 'filhoDoPrimeiroFilho';
primeFiDoFi.appendChild(fiDofi);
document.querySelector(fiDofi).parentElement.parentElement.nextElementSibling;
console.log('.terceiroFilho');