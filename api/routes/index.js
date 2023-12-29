var express = require('express');
var router = express.Router();

const mysql = require('mysql');

//On utilise l'utilisateur 'user' qui a des droits restreints (DQL, DML)
//Remarque : il faudrait déplacer le DSN en dehors du code dans un fichier d'environnement (laissé en exercice)
const dsn = {
    host: 'localhost',
    database: 'badminton',
    user: 'root',
    password: '',
}

/* GET home page. */
router.get('/', async function (req, res, next) {

  // #swagger.summary = "Page d'accueil"
  console.log('test');
});

module.exports = router;
