function pie(arr, targetOne, targetTwo) {

    let start = arr.indexOf(targetOne);
    let end = arr.indexOf(targetTwo);
    let result = arr.slice(start, end + 1)

    return result
}
console.log(pie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
))