var NoteList = function() {
  this.list = ["note 1"];
}

NoteList.prototype.getNotes = function() {
  return this.list[0]
}

NoteList.prototype.addNote = function(newNote) {
  this.list.push(newNote)
}