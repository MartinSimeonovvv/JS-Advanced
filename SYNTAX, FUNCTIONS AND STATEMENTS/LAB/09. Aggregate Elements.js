function aggregate(arr) {

    console.log(arr.reduce((sum, acc) => sum + acc));
    console.log(arr.reduce((a, b) =>   a  + 1 / b, 0));
    console.log(arr.join(''));
}
aggregate([2, 4, 8, 16])