function rotate(arr, n) {

    for (let i = 0; i < n; i++) {
        let take = arr.pop()
        arr.unshift(take)
    }
    console.log(arr.join(' '));
}
rotate(['1', 
'2', 
'3', 
'4'], 
2
)