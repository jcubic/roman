
const table = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C"
}

const fives = ["V", "L", "D"];
const tens = ["X", "C", "M"];
const onces = ["I", "X", "C", "M"];

function isTenMultipler(num: number) {
    return num % 10 === 0 && num.toString()[0] === "1";
}

function isFiveMultipler(num: number) {
    return num % 5 === 0 && num.toString()[0] == "5";
}

const toRoman = (arabic: number) => {
    const numbers = arabic.toString().split('').reverse().map((num, i) => {
        return Number(num) * (10 ** i);
    }).reverse();
    return numbers.reduce<string[]>((acc, num) => {
        let result;
        const str = num.toString();
        const first = Number(str[0]);
        if (num === 0) {
            result = "";
        } else if (isTenMultipler(num)) {
            result = tens[str.length - 2];
        } else if (isFiveMultipler(num)) {
            result = fives[str.length - 1];
        } else if (first > 0 && first < 4) {
            result = onces[str.length - 1].repeat(first);
        } else if (first + 1 === 5) {
            result = onces[str.length - 1] + fives[str.length - 1];
        } else if (first > 5 && first <= 8) {
            result = fives[str.length - 1] + onces[str.length - 1].repeat(first - 5);
        } else if (first + 1 === 10) {
            result = onces[str.length - 1] + tens[str.length - 1];
        } else {
            result = "";
        }
        return acc.concat(result);
    }, []).join('');
};

export default toRoman;
