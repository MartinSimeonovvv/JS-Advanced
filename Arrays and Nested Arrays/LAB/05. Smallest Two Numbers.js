function smallestNum(arr) {

    console.log(arr.sort((a, b) => a - b).slice(0, 2).join(' '))

}
smallestNum([3, 0, 10, 4, 7, 3])