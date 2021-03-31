module.exports = (sequelize, type) => {
    return sequelize.define("cancion", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: type.STRING,
        description: type.STRING,
        album: type.INTEGER,
        banda: type.INTEGER
    });
};