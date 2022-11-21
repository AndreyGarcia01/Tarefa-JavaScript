var a = parseInt(prompt("Digite um numero:"));
var b = parseInt(prompt("Digite um numero:"));

alert(a+" "+b);

aux = a;
a=b;
b=aux;

alert(a+" "+b);