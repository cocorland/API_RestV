const { Router } = require('express');
const router = Router();
const fs = require('file-system');
const _ = require('underscore');

//Endpoints:
//En api/directorios estoy mostrando el json que contiene todas mis carpetas, incluyendo subcarpetas y archivos
router.get('/', (req, res) => {
    const dirTree = require("directory-tree");
    const directorios = dirTree("/Users/adminvencer/Documents/PasantiaOrlando/");
    const todos = [directorios];
    res.json(todos);
});

module.exports = router;