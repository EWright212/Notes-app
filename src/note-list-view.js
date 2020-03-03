var NoteListView = function() {}

NoteListView.prototype.getView = function(listOfNotes) {
  var listContent = listOfNotes.list.map(e => e.getText())
  listContent = listContent.map(e => '<li><div>'+ e + '</div></li>')
  return "<ul>" + listContent.join("") + "</ul>"
}