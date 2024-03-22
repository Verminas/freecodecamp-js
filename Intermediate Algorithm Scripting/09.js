function uniteUnique(arr) {
    let array = [];
    [...arguments].forEach(item => {
        array.push(item);
    });
    let result = new Set(array.flat());
    return Array.from(result);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
