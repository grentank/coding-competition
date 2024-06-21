const createCounter = require('./index');

describe('Тесты createCounter', () => {
  test('Создаёт начальный счётчик', () => {
    const counter = createCounter(5);
    expect(counter()).toBe(5);
  });

  test('Последовательные значения', () => {
    const counter = createCounter(10);
    expect(counter()).toBe(10);
    expect(counter()).toBe(11);
    expect(counter()).toBe(12);
    expect(counter()).toBe(13);
  });

  test('multiple counters', () => {
    const counter1 = createCounter(1);
    const counter2 = createCounter(100);
    expect(counter1()).toBe(1);
    expect(counter1()).toBe(2);
    expect(counter2()).toBe(100);
    expect(counter2()).toBe(101);
    expect(counter1()).toBe(3);
  });

  test('Если начинается с 0', () => {
    const counter = createCounter(0);
    expect(counter()).toBe(0);
    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
  });

  test('Если начинается с -2', () => {
    const counter = createCounter(0);
    expect(counter()).toBe(0);
    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
  });
});
