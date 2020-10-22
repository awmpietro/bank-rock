const authenticate = (req, res, next) => {
  if (!req.session.email) {
    res.status(401);
    return res.json('User not logged');
  }
  return next();
};

module.exports = { authenticate };
