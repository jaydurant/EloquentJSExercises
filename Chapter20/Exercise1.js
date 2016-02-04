/*
In Chapter 17, the first exercise was to make several requests to eloquentjavascript.net/author, asking for different types of content by passing different Accept headers.

Do this again, using Node’s http.request function. Ask for at least the media types text/plain, text/html, and application/json. Remember that headers to a request can be given as an object, in the headers property of http.request’s first argument.

Write out the content of the responses to each request.


*/
var http = require("http");

["text/plain","text/html","application/json"].forEach(function(val){
var request = http.request({hostname:"eloquentjavascript.net",
			  path:"/author",
              method:"GET",
              headers:{Accept:val}
             }
             ,function(response){console.log(response)})
request.end();
});