const { Router } = require('express');
const router = Router();
const fs = require('file-system');
const _ = require('underscore');

//Endpoints:
//En api/folders estoy mostrando el json que contiene todas mis carpetas, incluyendo subcarpetas y archivos
router.get('/', (req, res) => {
    const dirTree = require("directory-tree");
    const directorios = dirTree("/Users/adminvencer/Documents/PasantiaOrlando/");
    const folders = [directorios];
    const loQueHayDentroDefolders = folders[0].children;
    res.json(loQueHayDentroDefolders);
});

router.get('/hijo', (req, res) => {
    const dirTree = require("directory-tree");
    const directorios = dirTree("/Users/adminvencer/Documents/PasantiaOrlando/");
    const folders = [directorios];
    const foldersHijo = folders[0].children;
    const loQueNecesito = foldersHijo[1].children;
    res.json(loQueNecesito);
})

router.get('/fact', (req,res) => {
    res.render('welcome-web');
})

module.exports = router;