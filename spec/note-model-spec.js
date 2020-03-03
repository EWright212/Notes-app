describe('Note', () => {
  it('print hello', () => {
    const note = new Note("Hello");
    expect(note.getText()).toBe("Hello")
  })
})


