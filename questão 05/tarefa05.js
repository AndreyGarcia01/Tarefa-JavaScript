oddEven(4);
function oddEven(num){
    for (let i = 0; i < num; i++){
       if (i % 2 === 0){
          console.log(i,'par');
       } else {
           console.log(i,'impar');
       }
    }
}