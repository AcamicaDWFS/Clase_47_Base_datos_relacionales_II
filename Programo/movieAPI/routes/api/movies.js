const router = require("express").Router();
const { Movie } = require("../../conexion");

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: Movie management
 */


/**
* @swagger
* path:
*  /movies/:
*    get:
*      summary: Get all movies
*      description: Use to request all movies
*      tags: [Movies]
*      responses:
*        '200':
*          description: A successful response
*/
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