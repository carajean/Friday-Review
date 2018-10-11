/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('recursiveMap', () => {
  it('returns an array', () => {
    const valueReturned = recursiveMap([1, 2, 3, 4], num => {
      return num * 2;
    });

    expect(Array.isArray(valueReturned)).toBe(true);
  });

  it('passes each element in the array argument to the callback function and stores the value returned in a new array', () => {
    expect(
      recursiveMap([1, 2, 3, 4], num => {
        return num * 2;
      })
    ).toEqual([2, 4, 6, 8]);

    expect(
      recursiveMap(['keep', 'practicing', 'recursion'], str => {
        return str.toUpperCase();
      })
    ).toEqual(['KEEP', 'PRACTICING', 'RECURSION']);
  });

  it('maps over nested arrays and includes the values from the nested arrays in the final array returned from recursiveMap', () => {
    expect(
      recursiveMap([1, 2, [3, 4], [5, 6]], num => {
        return num * 2;
      })
    ).toEqual([2, 4, 6, 8, 10, 12]);

    expect(
      recursiveMap([
        'ab',
        'cd',
        ['ef', 'gh', ['ij', 'kl', 'mn'], 'op'],
        'qr',
        'st',
      ], str => str.toUpperCase())
    ).toEqual(['AB', 'CD', 'EF', 'GH', 'IJ', 'KL', 'MN', 'OP', 'QR', 'ST']);
  });

  it('does not use Array.prototype.map', () => {
    spyOn(Array.prototype, 'map').and.callThrough();

    recursiveMap([1,2,3,4], num => num +2);

    expect(Array.prototype.map.calls.count()).toBe(0);
  })

  it('calls itself recursively', () => {
    spyOn(window, 'recursiveMap').and.callThrough();

    recursiveMap([1,2,3,4], num => num +2);

    expect(recursiveMap.calls.count()).toBeGreaterThan(1);
  })
});
