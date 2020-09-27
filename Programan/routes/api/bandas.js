const router = require("express").Router();
const { Banda } = require("../../conexion");

router.get("/", async (request, response) => {
    const bandas = await Banda.findAll();
    response.send(bandas);
});

router.post("/", async (request, response) => {
    const bandas = await Banda.create(request.body);
    response.json(bandas);
});

router.put("/:bandaId", async (request, response) => {
    await Banda.update(request.body, {
        where: { id: request.params.bandaId }
    });
    response.json({ success: "Banda actualizada" });
});

router.delete("/:bandaId", async (request, response) => {
    await Banda.destroy({
        where: { id: request.params.bandaId }
    });
    response.json({ success: "Banda borrada" });
});

module.exports = router;