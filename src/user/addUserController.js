const { addUser } = require("./api");

module.exports = (req, res, next) => {
  // todo validation
  const body = req.body || {};
  addUser(body.name, body.surname, body.job)
    .then(result => {
      res.status(201);
      res.send(result);
    })
    .catch(error => {
      res.status(500);
      res.send(error);
    });
};
