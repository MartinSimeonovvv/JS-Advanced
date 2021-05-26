function biggest(arr) {

    let biggest = Number.NEGATIVE_INFINITY;
    arr.forEach( i => i.forEach( j => biggest = Math.max(biggest, j)))
    return biggest;
}
biggest([[20, 50, 10],
[8, 33, 145]]
)