const Sequelize = require('sequelize');
const path = 'mariadb://root@localhost:3306/resto';
const sequelize = new Sequelize("resto", "root", "root", {
    host: "localhost",
    dialect: "mariadb"
});

sequelize.authenticate().then(() => {
    console.log('Conectado.');
}).catch(err => {
    console.error('Error de conexion:', err);
}).finally(() => {
    sequelize.close();
});

module.exports = sequelize;