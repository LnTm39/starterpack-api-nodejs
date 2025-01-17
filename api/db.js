/**
 * Export et test de la connexion à la base de données MySQL
 */

//Module mysql2 avec l'API des promesses
const mysql = require('mysql2/promise');

//On utilise l'utilisateur 'user' qui a des droits restreints (DQL, DML)
//Remarque : il faudrait déplacer le DSN en dehors du code dans un fichier d'environnement (laissé en exercice)
const dsn = {
    host: 'localhost',
    database: 'badminton',
    user: 'root',
    password: '',
}

/**
 * Une simple fonction test de la connexion à MySQL
 */
async function testConnexion() {
    const conn = await mysql.createConnection(dsn);
    const [res] = await conn.execute('SELECT ? + ? AS solution', [1, 1]);
    console.log(res)
}

testConnexion();


module.exports = { dsn, mysql }

