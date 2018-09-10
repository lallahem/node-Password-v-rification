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

  /*var maill = req.body.mail;  
  var msg = "Votre Identifiant est invalide";
  var nombre = 0;
  var validion = 0;
  var chaine1 = "" ;

  for (var i = 0; i < maill.length; i++) {

    if (maill[i] == "@" && i>1){
        nombre = i;
        validion = validion + 1;
        msg = "@ exists"
        chaine1 = msg;
    }
    if (maill[i] == "." && i>nombre+3){
        nombre = i;
        validion = validion + 1;
        msg = "'.' exist"
        chaine1 = msg;
    }  
    if (validion == 2 && i>nombre+2){
        msg = "Votre Identifiant est valider";
        chaine1 = msg ;
    }
      res.send(chaine+" "+chaine1);

}*/  
  var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (reg.test(testmail)){
    chaine1 ="test valide"
}else{
  chaine1 = "test non valide"
}
  res.send( chaine +" "+chaine1);


   //if(req.body.Pwd.substr(0,1).toUpperCase()!=req.body.Pwd.substr(0,1))
   //res.send(response)

})
//app.post('/', function (req, res) {
    //console.log(req.body)
    //req.body.timestamp= Math.floor(new Date().getTime()/1000)
 // res.send(req.body)
//})
/*app.post('/', function (req, res) {
  var maill = req.body.mail
  console.log(maill);
    res.send(maill)
  })
*/

app.listen(4500, function () {
  console.log('Example app listening on port 4500!')
})  