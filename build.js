const fs = require('fs') ;
const path = require('path');
fs.readdir('./markdown',function(err,files){
    for(var i=0;i<files.length;i++){
    var ph = path.join('./markdown',files[i]);
    var markdown = fs.readFileSync(ph).toString();
    var temp = fs.readFileSync('./temp.html').toString();
    var result = temp.replace('%t%',markdown);
    var name = files[i].split('.',1);
    fs.writeFileSync('./boke/'+name+'.html',result);
    }
    

});
