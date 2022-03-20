const path = require('path');

const { sendError } = require('micro');
const fsRouter = require('fs-router');

const match = fsRouter(path.join(__dirname, '/modules'));

module.exports = async function (req, res) {
  const matchedRoute = match(req);
  if (matchedRoute) {
    return await matchedRoute(req, res);
  }

  sendError(req, res, { statusCode: 404 });
};
