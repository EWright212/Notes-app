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
})