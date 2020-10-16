const router = require("express").Router();
const middlewares = require("./middlewares");
const apiMoviesRouter = require("./api/movies");
const apiUsersRouter = require("./api/users");

router.use("/movies", apiMoviesRouter);
//router.use("/movies", middlewares.checkToken, apiMoviesRouter);
router.use("/users", apiUsersRouter);

module.exports = router;