var NoteList = function() {
  this.list = [];
}

NoteList.prototype.getNotes = function() {
  noteContents = this.list.map(e => e.text)
  return noteContents.join()
}

NoteList.prototype.addNote = function(Note) {
  this.list.push(Note)
}

NoteList.prototype.addAndCreateNote = function(NoteDescription) {
  noteToInsert = new Note(NoteDescription);
  this.list.push(noteToInsert);
}