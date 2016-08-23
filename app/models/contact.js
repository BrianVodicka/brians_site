const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const crypto = require('crypto');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 11;

const async = require('async');
const nodemailer = require('nodemailer');

var ContactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: String
});

ContactSchema.statics.newMessage = function(name, email, message, done) {
  Contact.create({
    name: name,
    email: email,
    message: message
  }, function(err, contact) {
    if (err) done(err);
    else done(null, contact);
  });
};

var Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;
