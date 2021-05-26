function lastK(n, k) {

    let result = [1]
    for (let i = 1; i < n; i++) {
        let lastK = result.slice(-k)
        let redused = lastK.reduce((acc, el) => acc + Number(el), 0);
        result.push(redused)
    }
    return result;
}
console.log(lastK(6, 3))