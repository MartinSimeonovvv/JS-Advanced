function extract(arr) {

    let result = []
    let previous = ''

    for (let n of arr) {
        if (n >= previous) {
            result.push(n);
            previous = n
        }
    }

    return result
}
console.log(extract([20, 20 ,
    3,
    2,
    15,
    6,
    1]


))