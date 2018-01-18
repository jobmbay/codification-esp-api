'use strict';

var config = require('../../server/config.json');
var path = require('path');
var senderAddress = "jobmbay@gmail.com"; //Replace this address with your actual address

module.exports = function(Etudiant) {
  Etudiant.afterRemote('create', function(context, user, next) {
    var options = {
      type: 'email',
      to: user.email,
      from: senderAddress,
      subject: 'Thanks for registering.',
      template: path.resolve(__dirname, '../../server/views/verify.ejs'),
      redirect: '/verified',
      user: user
    };

    user.verify(options, function(err, response) {
      if (err) {
        Etudiant.deleteById(user.id);
        return next(err);
      }
      next();
    });
  });
};
