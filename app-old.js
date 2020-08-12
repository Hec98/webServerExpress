const http = require('http');
const { url } = require('inspector');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    let salida = {
        nombre: 'Hector',
        edad: 21,
        url: req.url 
    } 
    res.write(JSON.stringify(salida));
    /* res.write('Hola mundo'); */
    res.end();
})
.listen(8080);

console.log('Escuchando en el puerto 8080');