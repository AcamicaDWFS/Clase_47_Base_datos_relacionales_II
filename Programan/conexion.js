const Sequelize = require('sequelize');
const MovieModel = require("./models/movie");
const UserModel = require("./models/user");
const BandaModel = require( './models/banda' );
const AlbumModel = require( './models/album' );
const CancionModel = require( './models/cancion' );

const sequelize = new Sequelize("movieAPI", "root", "root", {
    host: "localhost",
    dialect: "mariadb"
});

const Movie = MovieModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Banda = BandaModel(sequelize, Sequelize);
const Album = AlbumModel(sequelize, Sequelize);
const Cancion = CancionModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
    console.info("Tablas sincronizadas");
}).catch(console.error);

module.exports = {
    Movie,
    User,
    Banda,
    Album,
    Cancion
}