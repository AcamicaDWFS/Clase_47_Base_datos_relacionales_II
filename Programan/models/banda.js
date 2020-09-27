module.exports = (sequelize, type) => {
    return sequelize.define("banda", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: type.STRING,
        description: type.STRING,
        albums: type.INTEGER,
    });
};