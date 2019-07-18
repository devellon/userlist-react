const { getUsers } = require("./api");

module.exports = (req, res, next) => {
  getUsers()
    .then(result => {
      res.send(result);
    })
    .catch(next);
};
