describe('Note list', () => {
  it('has a note', () => {
    var noteList = new NoteList();
    expect(noteList.getNotes()).toBe("note 1")
  })
})