const { Sequelize } = require( 'sequelize' );

const sequelize = new Sequelize('challenge', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb'
});

try{
    sequelize.query('SELECT * FROM Persons', { type: sequelize.QueryTypes.SELECT } )
    .then( (results) => {
        console.log( results );
    });
} catch( error ) {
    console.log( error );
}


// try {
//     sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }