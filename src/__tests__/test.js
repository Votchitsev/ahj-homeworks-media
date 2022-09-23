/**
 * @jest-environment jsdom
 */

describe('Test coord', () => {
  const domEnvironment = document.createElement('form');
  domEnvironment.classList.add('error-popup');
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('pattern', '\\[?\\d+.\\d+,\\s?.?\\d+.\\d+\\]?');
  domEnvironment.append(input);

  test('check 51.50851, -0.12572', () => {
    input.value = '[51.50851, 0.12572]';
    const result = input.checkValidity();
    expect(result).toBeTruthy();
  });

  test('check 51.50851,-0.12572', () => {
    input.value = '51.50851,-0.12572';
    const result = input.checkValidity();
    expect(result).toBeTruthy();
  });

  test('check [51.50851, -0.12572]', () => {
    input.value = '[51.50851, -0.12572]';
    const result = input.checkValidity();
    expect(result).toBeTruthy();
  });

  test('check 123', () => {
    input.value = '123';
    const result = input.checkValidity();
    expect(result).not.toBeTruthy();
  });
});
