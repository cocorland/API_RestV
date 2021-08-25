const { Router } = require('express');
const router = Router();

/* Pidiendo datos mediante get, donde el
argumento es una variable */
router.get('/ejemplo', (req, res) => {
    // Se declara la variable (un json)
    const data = {
        "nombre": "VCA-08.09.1995-ID2121",
        "owner": "Venceramica",
        "ruta": "Tesoreria/Transferencias"
    };
    res.json(data);
});

module.exports = router;