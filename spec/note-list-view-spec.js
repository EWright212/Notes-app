describe('View list of notes', () => {
  it("shows a note's html", () => {
    var noteListView = new NoteListView();
    var noteList = new NoteList();
    noteList.addAndCreateNote("Favourite snack: Dried mango")
    expect(noteListView.getView(noteList)).toBe('<ul><li><div>Favourite snack: Dried mango</div></li></ul>')
  })
  it("shows multiple notes' HTML", () => {
    var noteListView = new NoteListView();
    var noteList = new NoteList();
    noteList.addAndCreateNote("Favourite snack: Dried mango")
    noteList.addAndCreateNote("Favourite Pokémon: Tyranitar")
    expect(noteListView.getView(noteList)).toBe('<ul><li><div>Favourite snack: Dried mango</div></li><li><div>Favourite Pokémon: Tyranitar</div></li></ul>')
  })
})
