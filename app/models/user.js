const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const crypto = require('crypto');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 11;

const async = require('async');
const nodemailer = require('nodemailer');

const Entry = require('./entry');

var UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true
  },
  access: {
    level: String,
    modules: [String]
  }
});

UserSchema.methods.comparePassword = function(pw, cb) {
  if(!this.password) {
    cb(null, false);
  } else {
    bcrypt.compare(pw, this.password, function(err, isMatch) {
      if(err) return cb(err);
      cb(null, isMatch);
    });
  }
};

UserSchema.statics.isValidUserPassword = function(email, password, done) {
  this.findOne({email: email}, function(err, user) {
    if(err) return done(err);
    if(!user) return done(null, false);

    user.comparePassword(password, function(err, isMatch) {
      if(err) return done(err);
      if(isMatch) return done(null, user);
      else return done(null, false);
    });
  });
};
