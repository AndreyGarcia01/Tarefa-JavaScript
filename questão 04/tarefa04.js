// 04 - Escreva uma função que. dado um número, retorne: 
   //     Se divisível por 3: Fizz
   //     Se divisível por 5: Buzz
   //     Se divisível por 3 e 5: FizzBuzz
   //     Se não for divisível nem por 3 nem por 5, retorna o número dado
 //       Se não for um número, imprimir: "NaN - Não é um número! Informe um número

 
 function FizzBuzz(num){
 
     
       if (typeof num !== 'number'){
            console.error('NaN - Não é um número! Informe um Número');
       } else {
           if (num % 3 === 0 && num % 5 === 0){
              return "FizzBuzz";
           }

           if (num % 3 === 0){
              return "Fizz";
           }
            
           if (num % 5 === 0)
           return "Buzz";
       }
       return  num;
      }

 console.log(FizzBuzz(10));


 

    