const router = require("express").Router();
const { Movie } = require("../../conexion");

router.get("/", async (request, response) => {
    // response.send("Welcome. Working!");
    const movies = await Movie.findAll();
    //console.log(response.usuarioId);
    response.send(movies);
});

router.post("/", async (request, response) => {
    const movies = await Movie.create(request.body);
    response.json(movies);
});

router.put("/:movieId", async (request, response) => {
    await Movie.update(request.body, {
        where: { id: request.params.movieId }
    });
    response.json({ success: "Película actualizada" });
});

router.delete("/:movieId", async (request, response) => {
    await Movie.destroy({
        where: { id: request.params.movieId }
    });
    response.json({ success: "Película borrada" });
});

module.exports = router;