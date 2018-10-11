/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('createFunctions', () => {
  //NOTE: YOU MAY NOT USE THE ES2015 KEYWORD 'LET' IN THIS PROBLEM. FOR FULL CREDIT, YOU MUST COMPLETE THIS PROBLEM USING ONLY ES5

  let callbacks;

  beforeEach(() => {
    callbacks = createFunctions(10);
  });

  it('createFunctions returns an array of functions', () => {
    expect(Array.isArray(callbacks)).toBe(true);
  });

  it('the resulting array is the same length as the given number', () => {
    expect(callbacks.length).toBe(10);
  });

  it('all indexes in the array are functions', () => {
    // everything must be a function (hence the .every function)
    const onlyFuncs = callbacks.every(fn => {
      if (typeof fn === 'function') {
        return true;
      }
    });
    expect(onlyFuncs).toBe(true);
  });

  it('when functions in the array are invoked they return the correct number', () => {
    const returnValsForEachFunc = callbacks.map(fn => {
      return fn();
    });
    const callFunctionsMoreThanOnce = callbacks.map(fn => {
      return fn();
    });

    expect(returnValsForEachFunc).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(callFunctionsMoreThanOnce).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('random values for n', () => {
    const n = Math.floor(Math.random() * 20) + 1;
    const randomCallbacks = createFunctions(n);

    expect(Array.isArray(randomCallbacks)).toBe(true);
    expect(randomCallbacks.length).toEqual(n);

    randomCallbacks.forEach((fn, index) => {
      expect(fn()).toEqual(index);
    });
    randomCallbacks.forEach((fn, index) => {
      expect(fn()).toEqual(index);
    });
  });

  it('createFunctions does not call Array.prototype methods', () => {
    spyOn(Array.prototype, 'forEach').and.callThrough();
    spyOn(Array.prototype, 'map').and.callThrough();

    createFunctions(5);

    expect(Array.prototype.forEach.calls.any()).toBe(false);
    expect(Array.prototype.map.calls.any()).toBe(false);
  });
});