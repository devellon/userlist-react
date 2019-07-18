const restify = require("restify");

// controllers
const userListController = require("./user/userListController");
const removeUserController = require("./user/removeUserController");
const createUserController = require("./user/addUserController");
const updateUserController = require("./user/updateUserController");
const userController = require("./user/userController");
const restifyBodyParser = require("restify-plugins").bodyParser;
const corsMiddleware = require("restify-cors-middleware");

// create server
const server = restify.createServer();

// cors
const cors = corsMiddleware({
  preflightMaxAge: 5,
  origins: ["http://localhost:3000"],
  allowHeaders: ["API-Token"],
  exposeHeaders: ["API-Token-Expiry"]
});
server.pre(cors.preflight);
server.use(cors.actual);

// body parser for post data
server.use(restifyBodyParser());

// logger
server.use((req, res, next) => {
  console.log(req.method + ": " + req.url);
  next();
});

// routes
server.get("/user", userListController);
server.get("/user/:id", userController);
server.del("/user/:id", removeUserController);
server.post("/user/:id", updateUserController);
server.post("/user", createUserController);

// startup
server.listen(8888, function() {
  console.log("%s listening at %s", server.name, server.url);
});
