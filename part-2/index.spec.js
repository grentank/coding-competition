const once = require("./index");

describe("Тесты part-2", () => {
  test("fn вызывается однажды", () => {
    const mockFn = jest.fn((x) => x * 2);
    const onceFn = once(mockFn);

    expect(onceFn(2)).toBe(4);
    expect(onceFn(3)).toBe(undefined);
    expect(onceFn(4)).toBe(undefined);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("fn возвращает вначале то, что должна, а затем undefined", () => {
    const mockFn = jest.fn(() => "first call");
    const onceFn = once(mockFn);

    expect(onceFn()).toBe("first call");
    expect(onceFn()).toBe(undefined);
    expect(onceFn()).toBe(undefined);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("fn без аргументов", () => {
    const mockFn = jest.fn(() => 42);
    const onceFn = once(mockFn);

    expect(onceFn()).toBe(42);
    expect(onceFn()).toBe(undefined);
    expect(onceFn()).toBe(undefined);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("fn с аргументами", () => {
    const mockFn = jest.fn((a, b) => a + b);
    const onceFn = once(mockFn);

    expect(onceFn(1, 2)).toBe(3);
    expect(onceFn(3, 4)).toBe(undefined);
    expect(onceFn(5, 6)).toBe(undefined);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
