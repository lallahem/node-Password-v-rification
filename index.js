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
    chaine1 ="test valide"
}else{
  chaine1 = "test non valide"
}
  res.send( chaine +" "+chaine1);


   
})


app.listen(4500, function () {
  console.log('Example app listening on port 4500!')
})  