
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





// find 
Array.prototype.myFind = function myFind(array, condition){
    for(var i=0; i<array.length;i++){
        if(condition(array[i])){
            return array[i];
        }
    }
    return undefined;
}

// test
var result = array.myFind(array, function(x){
    return x>5;
});
console.log(result);



// some

Array.prototype.mySome = function mySome(array, condition){
    for(var i=0; i<array.length;i++){
        if(condition(array[i])){
            return true;
        }
    }
    return false;
}

// test

var array2=[ { name: 'John', age: 16 },
    { name: 'Jane', age: 19 },
    { name: 'Jack', age: 17 }]

var result = array2.mySome(array2, function(x){
    return x.age>18;
});
console.log("Có ít nhất 1 người dùng trên 19 tuổi ?"+result);


// every

Array.prototype.myEvery = function myEvery(array, condition){
    for(var i=0; i<array.length;i++){
        if(!condition(array[i])){
            return false;
        }
    }
    return true;
}

// test
var result = array2.myEvery(array2, function(x){
    return x.age>18;
}
);
console.log("người dùng đều trên 18 tuổi ? "+result);


// map

function myMap(array, callback) {
    const resultArray = []; 
  
    for (let i = 0; i < array.length; i++) {
  
      resultArray.push(callback(array[i], i, array));
    }
  
    return resultArray;
  }


  const mapped = myMap(array, x => x * 2);
  
  console.log(mapped); 
  