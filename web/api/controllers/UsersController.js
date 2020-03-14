/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  verify: async (req, res) => {
    const email = req.param('email');
    const password = req.param('password');
    const data = await Users.findOne({ email, password });
    const output = data ? true : false;
    if (output) {
      res.cookie('userId', data.id, { maxAge: 600000, signed: true });
    }
    return res.json(output);
  },

  logout: (req, res) => {
    if (req.signedCookies.userId) {
      res.clearCookie('userId');
    }
    return res.redirect('/');
  },

};

