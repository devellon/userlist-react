const { removeUser } = require("./api.js");

module.exports = (req, res, next) => {
  removeUser(+req.params.id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      if (err.code == "NOT_FOUND") {
        res.status(404);
        res.send(err);
      } else {
        next(err);
      }
    });
};
