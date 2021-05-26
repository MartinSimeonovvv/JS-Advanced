function negativePozitive(arr) {

    let result = []

    for (let n of arr) {
        n < 0 ? result.unshift(n) : result.push(n)
    }

    console.log(result.join('\n'));
}

negativePozitive([7, -2, 8, 9])