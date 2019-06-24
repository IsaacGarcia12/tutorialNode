var express = require('express'); //hacemos referencia a express js
var app = express();    //creamos una instancia de express 

//Express es la parte web
var port = 5000;    //variable global que asigna un puerto, para asignar un puerto se usa var port = 5000;

app.use(express.static('public'));  //Aqui se le dice a express que esta carpeta es estatica y de aqui se puede hacer rutas
app.use(express.static('src/views'));

app.get('/', function(req, res){
    res.send('Mi primer app con nodejs y express, ya puedo seguir!! ^w^');
}); //aqui la funcion get, hace algo una vez reciba esa peticion

app.get('/direccion', function(req, res){
    res.send('Habemus un redireccionamiento');
});

app.listen(port, function(err){
    console.log('El servidor esta en el puerto: ' + port);
});