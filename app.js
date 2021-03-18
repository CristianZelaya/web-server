//para usar varibles de entorno .env
require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;//asi se llama la variable de entorno

//requerir hbs, para renderizar
app.set('view engine', 'hbs');
//para parcializar
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        nombre: 'Cristian Zelaya',
        titulo: 'Curso de NodeJS'
    });//envio de parametros/informacion a nuestro html
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Cristian Zelaya',
        titulo: 'Curso de NodeJS'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Cristian Zelaya',
        titulo: 'Curso de NodeJS'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        titulo: 'Page not found'
    });
});

app.listen(port, () =>{
    console.log(`Template corriendo en http://localhost:${port}`);
});

//Handlebars.js es una extension de un templete 
// se instala npm i hbs para express renderize
// que sean pre renderizadas en backend
// se crea una carpeta llamada views donde van a ir todas las vistas
// y se llama la vista res.render('index')

/* este es un controlador callback (req, res) => {
    res.render('index')
})*/

//usar parciales con hbs
//cuando se repite codigo