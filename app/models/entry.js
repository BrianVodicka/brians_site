const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var EntrySchema = Schema({
  title: {
    type: String,
    required: true
  },
  content: String,
  date: Date,
  author: String,
  content: String,
  likes: Number,
  likesEnabled: Boolean
});

var Entry = mongoose.model('Entry', EntrySchema);
module.exports = Entry;
