const router = require("express").Router();
const middlewares = require("./middlewares");
const apiUsersRouter = require("./api/users");
const apiMoviesRouter = require("./api/movies");
const apiBandasRouter = require( './api/bandas' );
const apiAlbumsRouter = require( './api/albums' );
const apiCancionesRouter = require( './api/canciones' );

//router.use("/movies", apiMoviesRouter);
router.use("/canciones", middlewares.checkToken, apiCancionesRouter);
router.use("/albums", middlewares.checkToken, apiAlbumsRouter);
router.use("/bandas", middlewares.checkToken, apiBandasRouter);
router.use("/movies", middlewares.checkToken, apiMoviesRouter);
router.use("/users", apiUsersRouter);

module.exports = router;