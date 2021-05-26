function diagonal(arr) {

    let sumDiagonals = { main: 0, second: 0 }

    for (let i = 0; i < arr.length; i++) {
        sumDiagonals.main += arr[i][i];
        sumDiagonals.second += arr[i][arr.length - i - 1];
    }

    console.log(Object.values(sumDiagonals).join(' '))

}
diagonal([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]

)