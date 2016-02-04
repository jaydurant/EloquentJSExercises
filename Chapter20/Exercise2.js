/*
Fixing a leak

For easy remote access to some files, I might get into the habit of having the file server defined in this chapter running on my machine, in the /home/marijn/public directory. Then, one day, I find that someone has gained access to all the passwords I stored in my browser.

What happened?

If it isn’t clear to you yet, think back to the urlToPath function, defined like this:
*/
function urlToPath(url) {
  var path = require("url").parse(url).pathname;
  var decoded = decodeURIComponent(path).replace("(../|../.){1,}","/")
  return "." + decoded ;
}