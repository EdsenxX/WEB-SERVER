const http = require('http');

http.createServer( (req,res) => {

    let author = {
        nombre: 'Eduardo Serrano Jaime',
        edad: '18',
        url: req.url
    }

    res.write(JSON.stringify(author));
    // res.write('HELLO WORLD, BITCHES');
    res.end();

}).listen(8080);

console.log("Escuchando el puerto 8080");