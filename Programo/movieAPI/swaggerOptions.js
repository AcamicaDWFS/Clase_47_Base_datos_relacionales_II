
// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Movies API",
            description: `This is a sample movies server. 
            You can find out more about Swagger at http://swagger.io or
            on irc.freenode.net, #swagger.`,
            contact: {
                name: "Amazing Developer"
            } 
        },
        host: "localhost:3000",
        basePath: "/api",
        servers: ["http://localhost:3000"],
        tags: ["pet"]
    },
    // ['.routes/*.js']
    apis: ["./routes/api/*", "./models/*"]
};

exports.swaggerOptions = swaggerOptions;
