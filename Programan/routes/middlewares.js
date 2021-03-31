const jwt = require("jwt-simple");
const moment = require("moment");

const checkToken = (request, response, next) => {
    if (!request.headers["user-token"]) {
        return response.json({ error: "Falta token" });
    }

    const userToken = request.headers["user-token"];
    let payload = {};

    try {
        payload = jwt.decode(userToken, "secreto");
    } catch (error) {
        return response.json({ error: "Token incorrecto" });
    }

    if (payload.expiredAt < moment().unix) {
        return response.json({ error: "El token ha expirado" });
    }

    request.usuarioId = payload.usuarioId;
    next();
};

module.exports = {
    checkToken: checkToken
}