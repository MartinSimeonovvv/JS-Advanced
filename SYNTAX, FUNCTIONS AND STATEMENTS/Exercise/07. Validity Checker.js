function validity(x1, y1, x2, y2) {

    console.log(Number.isInteger(result(x1, y1))
        ? `{${x1}, ${y1}} to {0, 0} is valid`
        : `{${x1}, ${y1}} to {0, 0} is invalid`);
    console.log(Number.isInteger(result(x2, y2))
        ? `{${x2}, ${y2}} to {0, 0} is valid`
        : `{${x2}, ${y2}} to {0, 0} is invalid`);

    console.log(Number.isInteger(result((x1 - x2), (y1 - y2)))
        ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`
        : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);


    function result(x, y) {
        return Math.sqrt(x ** 2 + y ** 2);
    }
}
console.log(validity(3, 0, 0, 4))