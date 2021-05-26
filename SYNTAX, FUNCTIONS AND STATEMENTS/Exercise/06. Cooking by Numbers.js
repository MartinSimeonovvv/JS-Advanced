function cookingByNum(num, ...operations) {

    for (let currentOp of operations) {
        if (currentOp === 'chop') {
            num = num / 2
        } else if (currentOp === 'dice') {
            num = Math.sqrt(num)
        } else if (currentOp === 'spice') {
            num = num + 1
        } else if (currentOp === 'bake') {
            num = num * 3
        } else if (currentOp === 'fillet') {
            num = num - num * 0.2
        }
        console.log(num);
    }
}
cookingByNum('9', 'dice', 'spice', 'chop', 'bake', 'fillet')