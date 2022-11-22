function isTrue(array){
      let count = 0;
      for(const element of array){
         if (element){
             count++;
         }
      }
      return count;
}
