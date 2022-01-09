Array.prototype.checkPrime = function(){

      for(let i = 0 ; i < this.length ; i++){

        let divisor = Math.floor(this[i] / 2);

              if(this[i] > 1 ){
                let flag = true;
          
                    for(let j = divisor; j > 1; j--) {

                         if(this[i] % j == 0){

                            flag = false;                        
                              break;
                               
                          }

                }

                   if(flag)         
                     return true;
           }

    }
      return false;

}


const array1 = [4,6,8,5,10];
console.log(array1.checkPrime());

const array2 = [4,6,8,10,12];
console.log(array2.checkPrime());

const array3 = [0,1];
console.log(array3.checkPrime());

const array4 = [2,3,5,7,11,13];
console.log(array4.checkPrime());
