function sameNum(nInt) {

    nInt = nInt.toString().split('')
    let intToCompare = nInt[0]
    let isSame = true
    for (let i = 1; i < nInt.length; i++) {
        if (intToCompare !== nInt[i]) {
            isSame = false
            break
        }
    }
    console.log(isSame);
    console.log(nInt.reduce((sum, acc) => sum + Number(acc), 0));
}
sameNum(2222222)
sameNum(1234) 