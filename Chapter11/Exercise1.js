// Modify these definitions...
/*
Arrays

Add support for arrays to Egg by adding the following three functions to the top scope: array(...) to construct an array containing the argument values, length(array) to get an array’s length, and element(array, n) to fetch the nth element from an array.
*/

topEnv["array"] = function(args){
    var newArray = [];
        var args = Array.prototype.slice.call(arguments);
        return args;
};

topEnv["length"] = function(args){
  return args.length;
};

topEnv["element"] = function(arg,i){
  return arg[i];
};

run("do(define(sum, fun(array,",
    "     do(define(i, 0),",
    "        define(sum, 0),",
    "        while(<(i, length(array)),",
    "          do(define(sum, +(sum, element(array, i))),",
    "             define(i, +(i, 1)))),",
    "        sum))),",
    "   print(sum(array(1, 2, 3))))");
// → 6