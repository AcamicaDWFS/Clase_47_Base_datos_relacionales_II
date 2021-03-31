const router = require("express").Router();
const { Cancion } = require("../../conexion");

router.get("/", async (request, response) => {
    const canciones = await Cancion.findAll();
    response.send(canciones);
});

router.post("/", async (request, response) => {
    const canciones = await Cancion.create(request.body);
    response.json(canciones);
});

router.put("/:CancionId", async (request, response) => {
    await Cancion.update(request.body, {
        where: { id: request.params.CancionId }
    });
    response.json({ success: "Canción actualizada" });
});

router.delete("/:CancionId", async (request, response) => {
    await Cancion.destroy({
        where: { id: request.params.CancionId }
    });
    response.json({ success: "Canción borrada" });
});

module.exports = router;