/*
Sequence interface

Design an interface that abstracts iteration over a collection of values. An object that provides this interface represents a sequence, and the interface must somehow make it possible for code that uses such an object to iterate over the sequence, looking at the element values it is made up of and having some way to find out when the end of the sequence is reached.

When you have specified your interface, try to write a function logFive that takes a sequence object and calls console.log on its first five elements—or fewer, if the sequence has fewer than five elements.

Then implement an object type ArraySeq that wraps an array and allows iteration over the array using the interface you designed. Implement another object type RangeSeq that iterates over a range of integers (taking from and to arguments to its constructor) instead.

*/


function Sequence(values){
  	this.values = arguments.length > 1 ? arguments:values;
    

}

Sequence.prototype = {
		
  		iterate:function(func){
          		var x = this.seq;
          		for(var i = 0 ; this.limit ;i++){
                	func(x[i]);
                    this.limit -= 1 ;
                }
        	
        },
  		get stop(){
  			return this.seq.length;
		},
  		set stop(stops){
            this.limit = Math.min(this.stop,stops);
        }
  		
};


Object.defineProperty(Sequence.prototype,"seq",{
      get: function(){
            if(Object.getPrototypeOf(this.values) === []){
            	return  this.values;
            }
          	var seqArray = [];
          	for(var i = this.values[0] ; i <= this.values[1] ; i++){
            	seqArray.push(i);
            }
          	return seqArray;
        
      }
  
});

function ArraySeq(array){
	Sequence.call(this,array);
    
}

ArraySeq.prototype = Object.create(Sequence.prototype);

function RangeSeq(from,to){
	Sequence.apply(this,[from,to]);
}

RangeSeq.prototype = Object.create(Sequence.prototype);

function logFive(seqobj){
  	this.seq = seqobj;
    this.seq.stop = 5;
  	this.seq.iterate(console.log);	
}


logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));