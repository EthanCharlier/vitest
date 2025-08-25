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
    for (const token of numbers.split(delimiters)){
        console.log(token)
        const number = Number(token.trim())
        if (Number.isInteger(number)) sum += number;
    }
    return sum;
}