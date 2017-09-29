var mongoose = require('mongoose');  
var tagSchema = new mongoose.Schema({
  songId : String,
  position: Number,
  text: String,
  time: Number,
});

var Tag = mongoose.model('Tag', tagSchema);  
module.exports = Tag;