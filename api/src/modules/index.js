const { send } = require('micro');

module.exports.GET = async (req, res) => {
  send(res, 200);
};
