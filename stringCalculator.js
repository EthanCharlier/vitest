export function add(numbers) {
    if (typeof numbers !== 'string') throw new TypeError('number must be a string');
    if (!numbers.trim()) return 0;

    let sum = 0;
    for (const token of numbers.split(',')){
        const number = Number(token.trim())
        if (Number.isInteger(number)) sum += number;
    }
    return sum;
}