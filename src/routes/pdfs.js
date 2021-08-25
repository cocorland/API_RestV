const { Router } = require('express');
const router = Router();
const _ = require('underscore');

//Creacion de la variable para almacenar
//el json correspondiente a mi base de datos
const pdfs = require('../sample.json')

//Metodo GET
router.get('/', (req, res) => {
    res.json(pdfs);
});

// Metodo POST
/* Se recibe el valor de cada elemento que
debe existir en el json y si existen, se
agrega a la base de datos. */
router.post('/', (req, res) => {
    const { nombre, owner, ruta } = req.body;
    if (nombre && owner && ruta ) {
        const cantidad = pdfs.length;
        const newPdf = {...req.body, cantidad};
        console.log(newPdf);
        pdfs.push(newPdf);
        res.json(pdfs);
    } else {
        res.send('Wrong Request');
    }
});

//Metodo PUT
/*Quiero actualizar un elemento del arreglo
dado su nombre*/
router.put('/:nombre', (req, res) => {
    const { nombre } = req.params;
    const { owner, ruta } = req.body;
    if (owner && ruta) {
        _.each(pdfs, (pdf, i) => {
            if (pdf.nombre == nombre) {
                pdf.owner = owner;
                pdf.ruta = ruta;
            }
        });
        res.json(pdfs);
    } else {
        res.status(500).json({error: 'Hubo un error.'});
    }
});

//Metodo DELETE
router.delete('/:nombre', (req, res) => {
    //Guardo el objeto que recibí por parametro
    const { nombre } = req.params;
    _.each(pdfs, (pdf, i) => {
        if (pdf.nombre == nombre) {
            pdfs.splice(i, 1)
        }
    });
    res.send(pdfs);
})

module.exports = router;