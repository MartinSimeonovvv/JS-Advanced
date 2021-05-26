function strLength(strOne, strTwo, strThree) {

    const sumLength = strOne.length + strTwo.length + strThree.length
    const avgLength = Math.floor(sumLength / 3)
    console.log(sumLength);
    console.log(avgLength);
}
strLength('chocolate', 'ice cream', 'cake')