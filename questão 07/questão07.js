function strProperties(obj){
    for (const property in obj){
         if (typeof obj[property] === 'string'){
             console.log(property + ': ' + obj[property]);
         }
    }
   
}

  