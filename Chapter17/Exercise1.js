/*
Content negotiation

One of the things that HTTP can do, but that we have not discussed in this chapter, is called content negotiation. The Accept header for a request can be used to tell the server what type of document the client would like to get. Many servers ignore this header, but when a server knows of various ways to encode a resource, it can look at this header and send the one that the client prefers.

The URL eloquentjavascript.net/author is configured to respond with either plaintext, HTML, or JSON, depending on what the client asks for. These formats are identified by the standardized media types text/plain, text/html, and application/json.

Send requests to fetch all three formats of this resource. Use the setRequestHeader method of your XMLHttpRequest object to set the header named Accept to one of the media types given earlier. Make sure you set the header after calling open but before calling send.

Finally, try asking for the media type application/rainbows+unicorns and see what happens.
*/

var types= ["text/plain","application/json","text/html","application/rainbows+unicorns"];

types.forEach(function(val){
    getData(val).then(console.log,console.log);
});

function getData(val){
    return new Promise(function(success,failure){
    var httpObj = new XMLHttpRequest();
    httpObj.open("GET","http://eloquentjavascript.net/author",true);
    httpObj.setRequestHeader("accept",val);
    httpObj.addEventListener("load",function(){
        if(httpObj.status < 400){
           success(httpObj.responseText);
        }
        else{
            failure(new Error( httpObj.statusText));
        }
    });
    httpObj.addEventListener("error",function(){
        failure(new Error("Network Error"));
    })
    httpObj.send(null);
    });

}