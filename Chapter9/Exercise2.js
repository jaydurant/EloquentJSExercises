/*
Quoting style

Imagine you have written a story and used single quotation marks throughout to mark pieces of dialogue. Now you want to replace all the dialogue quotes with double quotes, while keeping the single quotes used in contractions like aren’t.

Think of a pattern that distinguishes these two kinds of quote usage and craft a call to the replace method that does the proper replacement.
*/

var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.

function quote(match){
	if(match.length === 1){
    	return match.replace(/'/,"\"");
   	}
  	return match;
}

console.log(text.replace(/(\w'\w)|((\b)?'(\b)?)/g, quote));
// → "I'm the cook," he said, "it's my job."