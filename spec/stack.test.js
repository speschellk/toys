describe.skip('Stack tests', () => {
  // remove when visit stacks
  describe('Remove duplicates', () => {
    let dupsRemoved = removeDuplicates(dupList);

    test('returns null if empty list or no list passed in', () => {
      expect(removeDuplicates()).toBeNull();
    });
  });
});
