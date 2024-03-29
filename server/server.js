require('./config/config');
const express = require("express");
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/usuario', (req, res) => {
    res.json("Get Usuario");
});

app.post('/usuario', (req, res) => {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre de usuario es necesario'
        });
    } else {
        res.json({
            usuario: body
        });
    }

});

app.put('/usuario/:id', (req, res) => {

    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', (req, res) => {
    res.json("Delete Usuario");
});

app.listen(process.env.PORT, () => {
    console.log("Escuchando en puerto", process.env.PORT);
});