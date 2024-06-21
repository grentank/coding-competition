const checkParity = require("./path_to_your_checkParity_file");

describe("Тесты part-5", function () {
  it("Тестирует чётность", function () {
    expect(checkParity("even", "101010")).toBe(1);
    expect(checkParity("even", "101011")).toBe(0);
    expect(checkParity("even", "1111")).toBe(0);
    expect(checkParity("even", "0000")).toBe(0);
    expect(checkParity("even", "10000001")).toBe(0);
  });

  it("Тестирует нечётность", function () {
    expect(checkParity("odd", "101010")).toBe(0);
    expect(checkParity("odd", "101011")).toBe(1);
    expect(checkParity("odd", "1111")).toBe(1);
    expect(checkParity("odd", "0000")).toBe(1);
    expect(checkParity("odd", "10000001")).toBe(1);
  });

  it("Разные случаи", function () {
    expect(checkParity("even", "1")).toBe(1);
    expect(checkParity("even", "0")).toBe(0);
    expect(checkParity("odd", "1")).toBe(0);
    expect(checkParity("odd", "0")).toBe(1);
    expect(checkParity("even", "11")).toBe(0);
    expect(checkParity("odd", "11")).toBe(1);
  });
});
