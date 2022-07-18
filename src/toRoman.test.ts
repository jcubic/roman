import toRoman from './toRoman';

type tupple = [number, string];

describe('toRoman', () => {
    it.each(
        [
            "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"
        ].map((roman, i): tupple => {
            return [i+1, roman];
        })
    )('should convert number %s to "%s"', (int: number, roman: string) => {
        expect(toRoman(int)).toEqual(roman);
    });
    it.each([
        [20, "XX"],
        [30, "XXX"],
        [40, "XL"],
        [50, "L"],
        [60, "LX"],
        [70, "LXX"],
        [80, "LXXX"],
        [90, "XC"],
        [100, "C"],
        [200, "CC"],
        [300, "CCC"],
        [400, "CD"],
        [500, "D"],
        [550, "DL"],
        [560, "DLX"],
        [570, "DLXX"],
        [800, "DCCC"],
        [900, "CM"],
        [1000, "M"],
        [1025, "MXXV"],
        [1164, "MCLXIV"],
        [1980, "MCMLXXX"],
        [1999, "MCMXCIX"],
        [2000, "MM"],
        [2022, "MMXXII"],
        [3000, "MMM"],
        [3888, "MMMDCCCLXXXVIII"]
    ])('should convert number %s to "%s"', (int: number, roman: string) => {
        expect(toRoman(int)).toEqual(roman);
    });
});
