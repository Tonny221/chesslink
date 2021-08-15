import { LocalStorage } from "./LocalStorage.service";

// this is here for file structure example
test("demo test", () => {
  expect(LocalStorage.get()).toBe(undefined);
});
