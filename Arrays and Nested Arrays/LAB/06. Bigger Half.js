function half(arr) {

    if (arr.length % 2 == 0) {
        return arr.sort((a, b) => a - b).splice(-arr.length / 2)
    } else {
        return arr.sort((a, b) => a - b).splice((arr.length / 2))
    }
}
console.log(half([4, 7, 2, 5]))