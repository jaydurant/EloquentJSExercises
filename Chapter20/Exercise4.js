var http = require("http");
var fs = require("fs");
var url = require("url");
var Promise = require("promise");

var methods = Object.create(null);

var fsp = {};
["stat", "readdir", "rmdir", "unlink", "mkdir"].forEach(function(method) {
  fsp[method] = Promise.denodeify(fs[method]);
});


http.createServer(function(request,response){
	respondTo(request).then(function(data){
		response.writeHead(data.code,{"Content-Type":data.type || "text/plain" })
		if(data.body && data.body.pipe){
			data.body.pipe(response);
			console.log(data.code,data.type);
		}
		else{
			response.end(data.body);
		}
	},function(error){
		response.writeHead(500,{"Content-Type":"text/plain"});
		respond.end(error.toString());
	})

}).listen(8080);

function respondTo(request){
	if(request.method in methods){
		return methods[request.method](urlPath(request.url),request);
	}
	else{
		return  Promise.resolve({code:500, body:"Method: " + request.method + "not Allowed" });
	}


}


function inspectPath(path){
	return fsp.stat(path).then(null,function(error){
		if(error.code = "ENOENT"){
			return null;
		}
		else{
			throw error;
		}
	})
}

function urlPath(hey){
	var path = url.parse(hey).pathname;
	path = decodeURIComponent(path);
	return path;
}

methods.GET = function(path){
	if(path === "/"){
		return Promise.resolve({code:200,body: fs.createReadStream("./index.html"),type:"text/html"});
	}
	else{
		return inspectPath(path).then(
			function(stats){
				if(!stats){
					return {code:404,body:"File not found"};
				}
				else if(stats.isDirectory){
					return fsp.readdir(path).then(function(files){return {code:200,body:files.join("\n") };});
				}

		},function(error){

		});
	}
}