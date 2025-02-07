import { getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  it("should return uppercase of valid string", () => {
    // ! AAA principles
    // * arrange:
    const sut = toUpperCase;
    const expected = "ABC";

    // * act:
    const actual = sut("abc");

    // * assert:
    // ? toBe = jest matcher
    expect(actual).toBe(expected);
  });

  describe.only("toUpperCase examples", () => {
    it.each([
      { input: "abc", expected: "ABC" },
      { input: "My-String", expected: "MY-STRING" },
      { input: "def", expected: "DEF" },
    ])("$input toUpperCase should be $expected", ({ input, expected }) => {
      const sut = toUpperCase;
      const actual = sut(input);

      expect(actual).toBe(expected);
    });
  });

  describe("getStringInfo for arg My-String should", () => {
    const sut = getStringInfo;
    const actual = sut("My-String");

    test("return right length", () => {
      const expected = 9;

      expect(actual.characters).toHaveLength(expected);
    });
    test("return right lower case", () => {
      const expected = "my-string";

      expect(actual.lowerCase).toBe(expected);
    });
    test("return right lower case", () => {
      const expected = "MY-STRING";

      expect(actual.upperCase).toBe(expected);
    });
    test("return right characters", () => {
      expect(actual.characters).toHaveLength(9);
      expect(actual.characters).toContain<string>("M");
      expect(actual.characters).toEqual(
        expect.arrayContaining(["S", "t", "r", "i", "n", "g"])
      );
    });
    test("return defined extra info", () => {
      expect(actual.extraInfo).toBeDefined();
    });
    test("return right extra info", () => {
      expect(actual.extraInfo).toEqual({});
    });
  });
});
