const addPromises = require("./index");

const wait = (ms, val) =>
  new Promise((resolve) => setTimeout(() => resolve(val), ms));

describe("Тесты part-3", () => {
  test("Суммирует промисы", async () => {
    const p1 = Promise.resolve(1);
    const p2 = Promise.resolve(2);
    const p3 = Promise.resolve(3);

    const result = await addPromises(p1, p2, p3);
    expect(result).toBe(6);
  });

  test("Суммирует 1 промис", async () => {
    const p1 = Promise.resolve(5);

    const result = await addPromises(p1);
    expect(result).toBe(5);
  });

  test("Ожидает долгие промисы", async () => {
    const p1 = wait(1000, 10);
    const p2 = wait(500, 7);

    const result = await addPromises(p1, p2);
    expect(result).toBe(17);
  });

  test("Суммирует много промисов", async () => {
    const p1 = Promise.resolve(1);
    const p2 = wait(400, 2);
    const p3 = Promise.resolve(3);
    const p4 = Promise.resolve(4);
    const p5 = wait(800, 5);

    const result = await addPromises(p1, p2, p3, p4, p5);
    expect(result).toBe(15);
  });
});
