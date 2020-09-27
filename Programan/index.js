const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT_SERVER = 3000;
const apiRouter = require("./routes/api");

// require("./conexion");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.get("/", (request, response) => {
    response.send("Hola Mundo");
});

app.listen(PORT_SERVER, () => {
    console.info(`Servidor arrancado en el puerto ${PORT_SERVER}`);
});