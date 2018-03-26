
//Program to execute controller's actions run

var fs = require('fs');
var lineNr = 0;
var hash = {};
var s = fs.createReadStream('development.log',{encoding:'utf8'})

s.on('data',function(chunk){
   var line =  chunk.split("\n")
   line.forEach(function(element) {
        var words = element.split(' ');
        if(words[0] == "Processing"){
          let  word = words[2]
          if(hash[word]){
              hash[word]++
          }
          else{
              hash[word] = 1
          }
        }
    }, this);
})

s.on('end',function(){
    console.log(hash);
})
