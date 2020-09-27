module.exports = (sequelize, type) => {
    return sequelize.define("album", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: type.STRING,
        description: type.STRING,
        banda: type.INTEGER,
    });
};