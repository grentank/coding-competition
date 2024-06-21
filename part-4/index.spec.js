const joinArrays = require("./index");

describe("Тесты part-4", () => {
  test("Возвращает все элементы, если id не пересекаются", () => {
    const arr1 = [
      { id: 1, value: "a" },
      { id: 3, value: "b" },
    ];
    const arr2 = [
      { id: 2, value: "c" },
      { id: 4, value: "d" },
    ];

    const result = joinArrays(arr1, arr2);
    const expected = [
      { id: 1, value: "a" },
      { id: 2, value: "c" },
      { id: 3, value: "b" },
      { id: 4, value: "d" },
    ];

    expect(result).toEqual(expected);
  });

  test("Пересекающиеся id из arr2 перезаписывает элемент из arr1", () => {
    const arr1 = [
      { id: 1, value: "a" },
      { id: 3, value: "b" },
    ];
    const arr2 = [
      { id: 3, value: "c" },
      { id: 4, value: "d" },
    ];

    const result = joinArrays(arr1, arr2);
    const expected = [
      { id: 1, value: "a" },
      { id: 3, value: "c" },
      { id: 4, value: "d" },
    ];

    expect(result).toEqual(expected);
  });

  test("Работает с пустыми массивами", () => {
    const arr1 = [];
    const arr2 = [];

    const result = joinArrays(arr1, arr2);
    const expected = [];

    expect(result).toEqual(expected);
  });

  test("Сложный пример", () => {
    const arr1 = [
      { id: 1, value: "a" },
      { id: 2, value: "b", fruit: "Lychee" },
      { id: 5, value: "e" },
    ];
    const arr2 = [
      { id: 2, value: "z", key: "Privet" },
      { id: 3, value: "c" },
      { id: 4, value: "d" },
    ];

    const result = joinArrays(arr1, arr2);
    const expected = [
      { id: 1, value: "a" },
      { id: 2, value: "z", fruit: "Lychee", key: "Privet" },
      { id: 3, value: "c" },
      { id: 4, value: "d" },
      { id: 5, value: "e" },
    ];

    expect(result).toEqual(expected);
  });
});
