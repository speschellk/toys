describe.skip('String tests', () => {
  // remove when visit strings again
  describe('Remove duplicates', () => {
    let dupsRemoved = removeDuplicates(dupList);

    test('returns null if empty list or no list passed in', () => {
      expect(removeDuplicates()).toBeNull();
    });
  });
});
