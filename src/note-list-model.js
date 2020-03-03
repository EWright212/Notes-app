var NoteList = function() {
  this.list = [];
}

NoteList.prototype.getNotes = function() {
  return this.list.join()
}

NoteList.prototype.addNote = function(newNote) {
  this.list.push(newNote)
}