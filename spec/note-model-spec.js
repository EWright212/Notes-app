describe('Note', () => {
  it('print hello', () => {
    var note = new Note("Hello");
    expect(note.getText()).toBe("Hello")
  })
})
