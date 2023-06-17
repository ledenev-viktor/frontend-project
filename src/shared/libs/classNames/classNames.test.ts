import { classnames } from "./classNames";

describe("classnames", () => {
  test("with only first param", () => {
    expect(classnames("someclass")).toBe("someclass");
  });

  test("with additional param", () => {
    const expected = "someclass class1 class2";
    expect(classnames("someclass", {}, ["class1", "class2"])).toBe(expected);
  });

  test("with mods param", () => {
    const expected = "someclass class1 class2 hovered scrollable";
    expect(
      classnames("someclass", { hovered: true, scrollable: true }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });

  test("with mods param false", () => {
    const expected = "someclass class1 class2 hovered";
    expect(
      classnames("someclass", { hovered: true, scrollable: false }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });

  test("with mods param undefined", () => {
    const expected = "someclass class1 class2 hovered";
    expect(
      classnames("someclass", { hovered: true, scrollable: undefined }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });
});
