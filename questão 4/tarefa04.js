// 04 - Escreva uma função que. dado um número, retorne: 
   //     Se divisível por 3: Fizz
   //     Se divisível por 5: Buzz
   //     Se divisível por 3 e 5: FizzBuzz
   //     Se não for divisível nem por 3 nem por 5, retorna o número dado
 //       Se não for um número, imprimir: "NaN - Não é um número! Informe um número

 
 function divisao(numero1){
 
     
       if (numero1 % 3 === 0)
       return console.log("Fizz");
          
       
      else (numero1 % 5 === 0)
     return console.log("Buzz");
 }
 
 console.log(divisao(15));


 

    