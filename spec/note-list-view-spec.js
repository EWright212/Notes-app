describe('View list of notes', () => {
  it("shows a note's html", () => {
    var noteListView = new NoteListView();
    var noteList = new NoteList();
    noteList.addAndCreateNote("Favourite snack: Dried mango")
    expect(noteListView.getView(noteList)).toBe('<ul><li><div>Favourite snack: Dried mango</div></li></ul>')
  })
})
