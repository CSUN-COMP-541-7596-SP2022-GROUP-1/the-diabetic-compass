const { send } = require('micro');

exports.GET = async (req, res) => {
  send(res, 200);
};
