describe('View list of notes', () => {
  it("shows a note's html", () => {
    var noteListView = new NoteListView
    expect(noteListView.views()).toBe('<ul><li><div>Favourite snack: Dried mango</div></li></ul>')
  })
})
