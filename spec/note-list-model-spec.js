describe('Note list', () => {
  it('has can take a note', () => {
    var noteList = new NoteList("note 1");
    expect(noteList.getNotes()).toBe("note 1")
  })
})