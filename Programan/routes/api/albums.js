const router = require("express").Router();
const { Album } = require("../../conexion");

router.get("/", async (request, response) => {
    const albums = await Album.findAll();
    response.send(albums);
});

router.post("/", async (request, response) => {
    const albums = await Album.create(request.body);
    response.json(albums);
});

router.put("/:albumId", async (request, response) => {
    await Album.update(request.body, {
        where: { id: request.params.albumId }
    });
    response.json({ success: "Album actualizado" });
});

router.delete("/:albumId", async (request, response) => {
    await Album.destroy({
        where: { id: request.params.albumId }
    });
    response.json({ success: "Album borrado" });
});

module.exports = router;