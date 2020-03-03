var NoteList = function() {
  this.list = [];
}

NoteList.prototype.getNotes = function() {
  return this.list.join()
}

NoteList.prototype.addNote = function(Note) {
  this.list.push(Note)
}

NoteList.prototype.addAndCreateNote = function(NoteDescription) {
  noteToInsert = new Note(NoteDescription);
  this.list.push(noteToInsert);
}