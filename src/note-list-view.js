var NoteListView = function() {}

NoteListView.prototype.getView = function(listOfNotes) {
  var listContent = listOfNotes.list.map(e => '<li><div>' 
  + e.getText() + '</div></li>')
  return "<ul>" + listContent.join("") + "</ul>"
}