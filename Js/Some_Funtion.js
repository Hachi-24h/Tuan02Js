
var array = [1,2,3,4,5,6,7,8,9,10];


// filter
Array.prototype.myFilter=  function ( array,condition){
    var result = [];
    for(var i=0; i<array.length;i++){
        if(condition(array[i])){
            result.push(array[i]);
        }
    }
    return result;
}

// test
var result = array.myFilter(array, function(x){
    return x>5;
});
console.log(result);


// reduce
Array.prototype.myReduce= function myReduce(array, callback, initialValue) {
    let accumulator = initialValue; 
    let startIndex = 0;
   
    if (initialValue === undefined) {
      accumulator = array[0];
      startIndex = 1; 
    }
  
   
    for (let i = startIndex; i < array.length; i++) {
      
      accumulator = callback(accumulator, array[i], i, array);
    }
  
    return accumulator;
  }

    // test
    var result = array.myReduce(array, function(accumulator, currentValue){
        return accumulator - currentValue;
    }, 0);
    console.log(result);

