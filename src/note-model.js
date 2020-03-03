var Note = function(description) {
  this.text = description
};

Note.prototype.getText = function() {
  return this.text
};


// For testing the isTrue and isFalse methods in library
// Note.prototype.trueTest = function() {
//   return true
// }
// Note.prototype.falseTest = function() {
//   return false
// }