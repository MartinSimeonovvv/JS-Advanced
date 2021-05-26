function area(arg) {

    return typeof arg == 'number' ? (Math.pow(arg, 2) * Math.PI).toFixed(2)
        : `We can not calculate the circle area, because we receive a ${typeof arg}.`

}
console.log(area(5))
console.log(area('name'))