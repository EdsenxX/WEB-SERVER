const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helper');

const port = process.env.PORT || 8080;

hbs.registerPartials(__dirname + '/views/partials');
app.use( express.static(__dirname + '/public') );

app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home.hbs',{
        nombre: 'Eduardo Serrano',
        anio: new Date().getFullYear()
    });

})

app.get('/about', (req,res) => {
    res.render('about.hbs',{
        anio: new Date().getFullYear()
    });
});

app.listen(port,()=>{
    console.log("Escuchando petisiones en el puerto: ", port);
})