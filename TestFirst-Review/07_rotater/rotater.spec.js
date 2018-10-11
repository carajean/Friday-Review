/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('rotater', () => {
  it('takes a string and returns a function', () => {
    const result = rotater('');
    expect(typeof result).toBe('function');
  });

  it('the function it returns takes a number and returns a string', () => {
    const rotate = rotater('');
    const result = rotate(0);
    expect(typeof result).toBe('string');
  });

  it('the returned function returns the original string rotated by the given number', () => {
    const rotate = rotater('abcde');
    expect(rotate(1)).toEqual('bcdea');
    expect(rotate(2)).toEqual('cdeab');
    expect(rotate(3)).toEqual('deabc');
    expect(rotate(4)).toEqual('eabcd');
    expect(rotate(5)).toEqual('abcde');
  });

  it('once told to rotate fully will afterwards rotate in the other direction', () => {
    const rotate = rotater('helloWORLD');

    expect(rotate(1)).toEqual('elloWORLDh'); // same as before
    expect(rotate(2)).toEqual('lloWORLDhe'); // same as before

    rotate(10); // max value triggers rotation reversal

    expect(rotate(1)).toEqual('DhelloWORL');
    expect(rotate(2)).toEqual('LDhelloWOR');
    expect(rotate(6)).toEqual('oWORLDhell');

    rotate(10); // max value triggers rotation reversal

    expect(rotate(1)).toEqual('elloWORLDh');
    expect(rotate(2)).toEqual('lloWORLDhe');
    expect(rotate(6)).toEqual('ORLDhelloW');
  });

  it('ditto, but with a different string', () => {
    const rotate = rotater('a-bunch-of-letters!');

    expect(rotate(1)).toEqual('-bunch-of-letters!a'); // same as before
    expect(rotate(2)).toEqual('bunch-of-letters!a-'); // same as before

    rotate(19); // max value triggers rotation reversal

    expect(rotate(3)).toEqual('rs!a-bunch-of-lette');
    expect(rotate(5)).toEqual('ters!a-bunch-of-let');
    expect(rotate(7)).toEqual('etters!a-bunch-of-l');

    rotate(19); // max value triggers rotation reversal

    expect(rotate(3)).toEqual('unch-of-letters!a-b');
    expect(rotate(5)).toEqual('ch-of-letters!a-bun');
    expect(rotate(7)).toEqual('-of-letters!a-bunch');
  });
});
