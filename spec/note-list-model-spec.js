describe('Note list', () => {
  it('can take a note and return it', () => {
    var noteList = new NoteList();
    noteList.addNote("note 1")
    expect(noteList.getNotes()).toBe("note 1")
  })
  it('can take two notes and return them', () => {
    var noteList = new NoteList();
    noteList.addNote("note 1")
    noteList.addNote("note 2")
    expect(noteList.getNotes()).toBe("note 1,note 2")
  })
  it('can create a note and then also insert it', () => {
    var noteList = new NoteList();
    noteList.addAndCreateNote("Favourite drink: Water")
    expect(noteList.list[0].getText()).toBe("Favourite drink: Water")
  })
  it('can create two notes and retrieve their text', () => {
    var noteList = new NoteList();
    noteList.addAndCreateNote("Favourite drink: Water")
    noteList.addAndCreateNote("Favourite snack: Dried mango")
    expect(noteList.getNotes()).toBe("Favourite drink: Water,Favourite snack: Dried mango")
  })
})