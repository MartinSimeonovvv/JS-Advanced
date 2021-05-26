function process(arr) {

    return arr
        .filter((n, i) => i % 2 !== 0)
        .map(n => n * 2)
        .reverse()
}
console.log(process([10, 15, 20, 25]))