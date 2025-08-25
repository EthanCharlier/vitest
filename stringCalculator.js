export function add(numbers) {
    if (typeof numbers !== 'string') throw new TypeError('numbers must be a string');
    if (!numbers.trim()) return 0;

    let delimiters = /,|\r?\n|\\n/;

    if (numbers.startsWith('//')) {
        const i = numbers.indexOf('\n');
        const header = numbers.slice(2, i);

        let delims;
        if (header.startsWith('[')) {
          const m = [...header.matchAll(/\[([^\]]+)\]/g)];
          delims = m.map(x => x[1]);
        } else {
          delims = [header];
        }

        const escapeRegex = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        delimiters = new RegExp(delims.map(escapeRegex).join('|'));
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