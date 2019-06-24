var express = require('express'); //hacemos referencia a express js
var app = express();    //creamos una instancia de express 

//Express es la parte web
var port = 5000;    //variable global que asigna un puerto, para asignar un puerto se usa var port = 5000;
app.listen(port, function(err){
    console.log('El servidor esta en el puerto: ' + port);
});