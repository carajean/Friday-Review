/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('reverseStringsAndArrays', () => {
  it('returns an array', () => {
    const returnValue = reverseStringsAndArrays([
      'hello',
      'world',
      [1, 2, 3],
      { key: 'value' },
    ]);
    expect(Array.isArray(returnValue)).toBe(true);
  });

  it('reverses strings', () => {
    expect(reverseStringsAndArrays(['hello'])).toEqual(['olleh']);
  });

  it('reverses strings and reverses the order of values in the array', () => {
    expect(reverseStringsAndArrays(['123', '456'])).toEqual(['654', '321']);
    expect(reverseStringsAndArrays(['abc', 'def', 'ghi', 'jkl'])).toEqual([
      'lkj',
      'ihg',
      'fed',
      'cba',
    ]);
  });

  it('reverses the ordering of the array', () => {
    expect(reverseStringsAndArrays([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
    expect(reverseStringsAndArrays(['one', 2, 'three', 4, 'five'])).toEqual([
      'evif',
      4,
      'eerht',
      2,
      'eno',
    ]);
  });

  it('reverses the ordering of an indefinite amount of nested arrays, every array is reversed', () => {
    expect(reverseStringsAndArrays([1, 2, [3, 4]])).toEqual([[4, 3], 2, 1]);
    // note: review the array argument carefully, every array (even the nested array) is reversed
    expect(reverseStringsAndArrays([1, 2, [3, 4, [5, 6, 7]]])).toEqual([
      [[7, 6, 5], 4, 3],
      2,
      1,
    ]);

    expect(
      reverseStringsAndArrays([1, 2, 3, [4, 5, 6, [7, [8, 9, [10]]]]])
    ).toEqual([[[[[10], 9, 8], 7], 6, 5, 4], 3, 2, 1]);
  });

  it('reverses the ordering of strings (even within nested arrays)', () => {
    expect(reverseStringsAndArrays(['abc', ['def']])).toEqual([['fed'], 'cba']);
    expect(
      reverseStringsAndArrays([
        ['abc'],
        1,
        2,
        3,
        [4, 5, 'def', ['ghi', 'jkl', [6, 7, 8]]],
      ])
    ).toEqual([[[[8, 7, 6], 'lkj', 'ihg'], 'fed', 5, 4], 3, 2, 1, ['cba']]);
  });

  it('reverses strings when a string is assigned to a property on an object', () => {
    expect(reverseStringsAndArrays([{ property: 'value' }])).toEqual([
      { property: 'eulav' },
    ]);
    expect(
      reverseStringsAndArrays([1, 2, { property: 'value' }, 3, 4])
    ).toEqual([4, 3, { property: 'eulav' }, 2, 1]);
  });

  it('reverses arrays (and all nested arrays) when an array is assigned to a property on an object', () => {
    expect(reverseStringsAndArrays([{ key: [1, 2, 3, 4] }])).toEqual([
      { key: [4, 3, 2, 1] },
    ]);
    expect(
      reverseStringsAndArrays([true, false, { key: [1, 2, [3, 4]] }, 5])
    ).toEqual([5, { key: [[4, 3], 2, 1] }, false, true]);
  });

  it('calls itself recursively', () => {
    /* 
      NOTE: This is a test spec that determines if the reverseStringsAndArrays function calls itself recursively 

      In order to make this spec work properly, the function needs to be declared as a function declaration:

        function reverseStringsAndArrays() {

        }

      You can't use an expression:

        const reverseStringsAndArrays = function() {}
        const reverseStringsAndArrays = () => {}

      There isn't anything fundamentally wrong with creating the function with an expression, but the test specs won't
      be able to recognize the function if declared with an expression.

    */

    spyOn(window, 'reverseStringsAndArrays').and.callThrough();

    reverseStringsAndArrays([[8, 4, 0], 8, {key:'value'}]);

    // checks if `recSmallesInt` is called more than once (if it is recursive, it will be called more than one time)
    expect(reverseStringsAndArrays.calls.count()).toBeGreaterThan(1);
  });
});
