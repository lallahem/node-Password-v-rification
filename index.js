const express = require('express')
var bodyParser = require('body-parser')
const app = express()
var chaine ="";
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




app.post('/', function (req, res){
  var matches = req.body.Pwd.match(/\d+/g);
  var response = "";
  var testmail = req.body.mail;
  var pseudoname = req.body.name;
  var temp = new Date(req.body.datenaissance);
  var tempsnow = new Date();

   if((req.body.Pwd.length < 8 ) )
   {
     response = "Not valid"
      chaine.push(response);

   }
  
   if(matches && ( Object.keys(matches).length > 0) )
   {
    response = "weak"
    chaine= response;
  }
   var tabnum = new Array('-','_','*','#')
var char=req.body.Pwd.split('')
   
     for(var j = 0; j < char.length;j++ ){
       if (char.indexOf(char[j])>-1){
         response = "normal"
         chaine = response;
         break;
       }
       
     }
  

   for(var i = 0; i < char.length;i++){
    if((char[i] == char[i].toUpperCase())&&(isNaN(char[i]))){
    response = "hard"
    chaine = response;
    break;
  }}

 
  var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (reg.test(testmail)){
    chaine1 ="test  mail valide"
}else{
  chaine1 = "test non valide"
}

for(var k = 0; k < pseudoname.length;k++){
   if (pseudoname.indexOf(" ") == -1){
     chaine2 ="contient pas espace "
   }else{
     chaine2="contient espace "
   }

}
console.log(temp);
console.log(tempsnow)
diff = tempsnow - temp
console.log(diff)
tmp = diff /(365*3600*24)
console.log(tmp)
tmp = Math.round(tmp)/1000
tmp = Math.round(tmp)
if(tmp > 18){
  chaine3 = "Majeur"
}else{
  chaine3 = "Mineur"
}

  res.send( chaine +"    "+chaine1+"    "+chaine2 +"   "+chaine3+" avec age"+tmp);
})
app.listen(4500, function () {
  console.log('Example app listening on port 4500!')
})  ;