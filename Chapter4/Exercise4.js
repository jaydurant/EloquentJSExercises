/*
Deep comparison
The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.
Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.
To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account:
by a historical accident, typeof null also produces "object".
*/

function deepEqual(arg1,arg2){
	var x = typeof arg1;
  	var y = typeof arg2;
  	if(x === y ){
    	if(x === "object"){
        	for(var elem in arg1){
            	if(elem in arg2){
                	if(typeof arg1[elem] === "object" && typeof arg2[elem] === "object"){
                    	if(!deepEqual(arg1[elem],arg2[elem])){
                        	return false;
                        }
                    }
                  	if(typeof arg1[elem] !== typeof arg2[elem]){
                      return false;
                    }
                  	else if(arg1[elem] === arg2[elem]){
                    	continue;
                    }
                  	
                }
              	else{
                	return false;
                }
            }
          	return true;
        }
      	else if( x === y){
        	return true;
        }
    }
  	else{
    	return false;
    }
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true