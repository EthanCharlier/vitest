export function add(numbers) {
    if (typeof numbers !== 'string') throw new TypeError('numbers must be a string');
    if (!numbers.trim()) return 0;

    let delimiters = /,|\r?\n|\\n/;

    if (numbers.startsWith('//')) {
        const i = numbers.indexOf('\n');
        const d = numbers.slice(2, i);

        if (d.includes('[') || d.includes(']')) throw new Error('[] not allowed as delimiters');

        delimiters = new RegExp(d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        numbers = numbers.slice(i + 1);
    }

    let sum = 0;
    let negatives = [];
    for (const token of numbers.split(delimiters)){
        const number = Number(token.trim())
        if (!Number.isInteger(number)) continue;
        if (number < 0) {
            negatives.push(number);
        } else {
            if (number <= 1000) sum += number;
        }
    }

    if (negatives.length) {
      throw new Error(`Negatives not allowed: ${negatives.join(',')}`);
    }

    return sum;
}