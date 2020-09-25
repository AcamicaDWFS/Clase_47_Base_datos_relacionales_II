module.exports = (sequelize, type) => {
    return sequelize.define("movie", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: type.STRING,
        description: type.STRING,
        score: type.INTEGER,
        director: type.STRING
    });
};