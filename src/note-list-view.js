var NoteListView = function() {}

NoteListView.prototype.getView = function(listOfNotes) {
  return ('<ul><li><div>' + listOfNotes.getNotes() +'</div></li></ul>')
}