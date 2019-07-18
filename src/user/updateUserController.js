const { updateUser } = require("./api");

module.exports = (req, res, next) => {
  const body = req.body || {};
  updateUser(+req.params.id, body.name, body.surname, body.job)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(500);
      res.send(err);
    });
};
