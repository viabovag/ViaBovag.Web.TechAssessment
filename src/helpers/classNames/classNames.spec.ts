import classNames from './index';

const TEST_OUTPUT = 'one two three';

describe('classes', () => {
  it('accepts a single string', () => {
    const input = 'example';
    const output = classNames(input);
    expect(output).toEqual(input);
  });

  it('accepts an array of strings', () => {
    const input = ['one', 'two', 'three'];
    const output = classNames(input);
    expect(output).toEqual(TEST_OUTPUT);
  });

  it('skips any falsey array members', () => {
    const input = ['one', undefined, 'two', false, 'three', null];
    const output = classNames(input as string[]);
    expect(output).toEqual(TEST_OUTPUT);
  });

  it('accepts an object', () => {
    const input = {
      one: true,
      two: true,
      three: true,
    };
    const output = classNames(input);
    expect(output).toEqual(TEST_OUTPUT);
  });

  it('skips any object key with a falsey value', () => {
    const input = {
      one: true,
      foo: undefined,
      two: true,
      bar: false,
      three: true,
      baz: null,
    } as unknown;
    const output = classNames(input as Record<string, boolean>);
    expect(output).toEqual(TEST_OUTPUT);
  });

  it('uses spaces to separate classes', () => {
    const inputArray = classNames(['alpha', 'beta', 'delta', 'omikron']);
    const outputArray = inputArray.match(/\s/g);
    expect(outputArray).toHaveLength(3);

    const inputObject = classNames({
      alpha: true,
      beta: true,
      delta: true,
      omikron: true,
    });
    const outputObject = inputObject.match(/\s/g);
    expect(outputObject).toHaveLength(3);
  });
});
