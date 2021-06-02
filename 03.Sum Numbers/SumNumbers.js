function calc() {
    const numA = Number(document.getElementById('num1').value)
    const numB = Number(document.getElementById('num2').value)

    const result = numA + numB
 
    document.getElementById('sum').value = result
}
