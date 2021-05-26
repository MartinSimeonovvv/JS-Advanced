function sortingNum(arr) {

    let sortedArr = [];
    arr = arr.sort((a, b) => a - b);
    
    let arrCopy = arr.slice(0)

    for (let i = 0; i < arrCopy.length; i++) {
        let n;
        if (i % 2 == 0) {
            n = arr.shift()
        } else {
            n = arr.pop()
        }
        sortedArr.push(n)
    }

    return sortedArr
}
console.log(sortingNum([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))