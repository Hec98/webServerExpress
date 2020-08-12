const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/public`))

// Express HBS engine 
hbs.registerPartials(`${__dirname}/views/parciales`);
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Héctor'
  });   
});

app.get('/about', (req, res) => {
  res.render('about');   
});

/* app.get('/', (req, res) => {
  // res.send('Hello World'); 
  let salida = {
    nombre: 'Hector',
    edad: 21,
    url: req.url 
}
res.send(salida);
}); */

/* app.get('/data', (req, res) => {
    res.send('Hola Data');
}) */
const hora = new Date().getHours();
const minutos = new Date().getMinutes();
const segundos = new Date().getSeconds();
app.listen(3000, () => console.log(`Escuchando peticiones en el puerto ${port} ${hora}:${minutos}:${segundos}`));