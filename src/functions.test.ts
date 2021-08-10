import {objectValueLength, safeObjectValueLength, stringLength,} from "./functions";

describe("string length test", () => {
    it("return string length on string input", () => {
        expect(stringLength("WomenGoTech")).toBe(11);
    });

    it("return 0 when input is null", () => {
        expect(stringLength(null)).toBe(0);
    });
});

describe("object length test", () => {
    it("returns strings in object length", () => {
        expect(
            objectValueLength({
                attendee1: "Migle",
                attendee2: "Agne",
                attendee3: "Loreta",
                numberOfGuests: 11,
            })
        ).toBe(15);
    });
});

describe("object length with custom function test", () => {
    it("calls custom function expected number of times", () => {
        const mockedFunction = jest.fn((x) => x.length ?? 0);

        expect(
            safeObjectValueLength(
                {
                    attendee1: "Migle",
                    attendee2: "Agne",
                    attendee3: "Loreta",
                    numberOfGuests: 11,
                },
                mockedFunction
            )
        ).toBeDefined();
        expect(mockedFunction).toBeCalledTimes(4);
    });
});

