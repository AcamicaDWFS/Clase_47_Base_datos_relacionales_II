const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT_SERVER = 3000;
const apiRouter = require("./routes/api");

require("./conexion");

//////
const swaggerUi = require("swagger-ui-express");
const { swaggerOptions } = require("./swaggerOptions");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Primer modo con archivo YAML
//const YAML = require('yamljs');
//const swaggerDocument = YAML.load('./swagger.yaml');
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//////


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.get("/", (request, response) => {
    response.send("Hola Mundo");
});

app.listen(PORT_SERVER, () => {
    console.info(`Servidor arrancado en el puerto ${PORT_SERVER}`);
});