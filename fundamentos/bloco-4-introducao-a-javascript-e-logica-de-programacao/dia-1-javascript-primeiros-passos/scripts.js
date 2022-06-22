const a = 0;
const b = 1;
const c = 178;
const abc = a+b+c;

const ad = (a+b);
const sub = (a-b);
const mult = (a*b);
const div = (a/b);
const mod = (a%b);

//ex5
if (a+b+c === 180) {
    console.log(true);
}
else if (a+b+c > 180) {
    console.log(false);
    console.log('soma dos angulos maior que 180');
}
else if (a+b+c < 180) {
    console.log(false);
    console.log('soma dos angulos menor que 180');
}
else {
    console.log(false);
}
if (a<0 || b<0 || c<0){
    console.log('angulo com valor negativo nao permitido');
}
if (a>178 || b>178 || c>178){
    console.log('angulo maior que o permitido');
}
/*ex4
if (a<0){
    console.log('negative');
}
else if (a === 0){
    console.log('zero');
}
else {
    console.log('positive');
}

/*ex3
if  (a>b && a>c) {
    console.log(a);
}
else if (b>a && b>c) {
    console.log(b);
}
else {
    console.log(c);
}

/* ex2
if (a>b) {
    console.log(a);
}
else {
    console.log(b);
}
*/