const express = require('express')
var bodyParser = require('body-parser')
const app = express()
var chaine = new Array ()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})


app.post('/', function (req, res){
  var matches = req.body.Pwd.match(/\d+/g);
  var response = "";

   if((req.body.Pwd.length < 8 ) )
   {
     response = response+" "+"Not valid"
      chaine.push(response);

   }
  
   if(matches && ( Object.keys(matches).length > 0) )
   {
    response = response+" "+"weak"
    chaine.push(response);
  }
   var tabnum = new Array('-','_','*','#')
var char=req.body.Pwd.split('')
   
     for(var j = 0; j < char.length;j++ ){
       if (char.indexOf(char[j])>-1){
         response = response +" "+"normal"
         chaine.push(response);
         break;
       }
       
     }
  

   for(var i = 0; i < char.length;i++){
    if((char[i] == char[i].toUpperCase())&&(isNaN(char[i])))
    response = response +" "+"hard"
    chaine.push(response);
    break;
  }
  res.send(chaine[0]);


   //if(req.body.Pwd.substr(0,1).toUpperCase()!=req.body.Pwd.substr(0,1))
   //res.send(response)

})
//app.post('/', function (req, res) {
    //console.log(req.body)
    //req.body.timestamp= Math.floor(new Date().getTime()/1000)
 // res.send(req.body)
//})
app.get('/x', function (req, res) {
    res.send('bonjour!')
  })


app.listen(4500, function () {
  console.log('Example app listening on port 4500!')
})