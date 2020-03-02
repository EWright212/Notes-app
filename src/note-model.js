var Note = function() {}

Note.prototype.text = function() {
  return("Hello");
};


// For testing the isTrue and isFalse methods in library
Note.prototype.trueTest = function() {
  return true
}
Note.prototype.falseTest = function() {
  return false
}