function sumNum(n, m) {
    n = Number(n)
    m = Number(m)
    let result  = 0

    for (let i = n; i <= m; i++) {
        result  += Number(i)
    }

    return result 
}
console.log(sumNum('-8', '20'))