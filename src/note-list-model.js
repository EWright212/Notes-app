var NoteList = function(newNote) {
  this.list = [newNote];
}

NoteList.prototype.getNotes = function() {
  return this.list[0]
}