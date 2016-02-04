/*
Creating directories

Though the DELETE method is wired up to delete directories (using fs.rmdir), the file server currently does not provide any way to create a directory.

Add support for a method MKCOL, which should create a directory by calling fs.mkdir. MKCOL is not one of the basic HTTP methods, but it does exist, for this same purpose, in the WebDAV standard, which specifies a set of extensions to HTTP, making it suitable for writing resources, not just reading them.
*/

methods.MKCOL = function(path){
	return inspectPath(path).then(function(stat){
    	if(!stat){
        	fs.mkdir(path).then(function(){
            	return {code:204,body:"directory created"};
            })
        }
         else if(stat.isDirectory()){
         	return returnNoContent;   
         }
         else if(stat.isFile()){
         	return {code:400,body:"bad request"}
         }
    })

}