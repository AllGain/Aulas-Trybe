let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let even = [];
let odd = [];
let umA25 = [];

//ex9
for (let index9=1; index9 <= 25; index9++) {
  
  umA25.push(index9/2);
}
console.log(umA25);

/*ex8
for (let index8=1; index8 <= 25; index8++) {
  umA25.push(index8);
}
console.log(umA25);

/*ex7
console.log(Math.min.apply(null, numbers));

/*ex6
for (index6=0; index6 < numbers.length; index6++){
  if (numbers[index6] % 2 == 0) {
  odd.push(numbers[index6]);
  }
  else {
    even.push(numbers[index6]);
  }
}
if (even === 0){
  console.log('nenhum valor impar foi encontrado')
}
else{
  console.log(even)
}

/*ex5
console.log(Math.max.apply(null, numbers));

/*ex4
for (let index4 = 0; index4 < numbers.length; index4++) {
  //soma = numbers[index2] + soma; opção 1
  soma += numbers[index4]; //opção 2
}
let media = soma / numbers.length;
if  (media > 20){
  console.log('valor maior que 20');
}
else {
  console.log('valor menor que 20');

}
/*ex3
for (let index3 = 0; index3 < numbers.length; index3++) {
  //soma = numbers[index2] + soma; opção 1
  soma += numbers[index3]; //opção 2
}
let media = soma / numbers.length;
console.log(media);

/*ex2
for (let index2 = 0; index2 < numbers.length; index2++) {
    //soma = numbers[index2] + soma; opção 1
    soma += numbers[index2]; //opção 2
}
console.log(soma);

/*ex1
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}
*/
