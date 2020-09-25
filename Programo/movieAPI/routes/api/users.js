const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { User } = require("../../conexion");
const { check, validationResult } = require("express-validator");
const moment = require("moment");
const jwt = require("jwt-simple");


router.post("/register", [
    check("username", "El usuario es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio").not().isEmpty(),
    check("email", "El email no es correcto").isEmail()
], async (request, response) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        return response.status(404).json({ errores: errors.array() });
    }

    request.body.password = bcrypt.hashSync(request.body.password, 10);
    const user = await User.create(request.body);
    response.json(user);
});

router.post("/login", async (request, response) => {
    const user = await User.findOne({ where: { email: request.body.email } });

    const iguales = bcrypt.compareSync(request.body.password, user.password);
    if (iguales) {
        response.json({ success: createToken(user) });
    } else {
        response.json({ error: "Usuario y/o constraseña incorrectos" });
    }
});

const createToken = (user) => {
    const payload = {
        usuarioId: user.id,
        createdAt: moment().unix,
        expiredAt: moment().add(5, "minutes").unix
    }

    return jwt.encode(payload, "secreto");
}

module.exports = router;