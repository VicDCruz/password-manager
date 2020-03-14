/**
 * PasswordsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  display: async (req, res) => {
    const userId = req.signedCookies.userId;
    if (!userId) {
      return res.redirect('/');
    }
    const passwords = await Passwords.find({ user: userId });
    return res.view('dashboard', { passwords });
  },

  add: async (req, res) => {
    const newElement = await Passwords.create({ ...req.allParams(), user: req.signedCookies.userId }).fetch();
    return res.json(newElement);
  }

};

