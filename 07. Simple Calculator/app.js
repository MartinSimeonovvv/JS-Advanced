function calculator() {

    let firstElement
    let secondElement
    let result

    return {
        init: (selector1, selector2, resultSelector) => {
            firstElement = document.querySelector(selector1)
            secondElement = document.querySelector(selector2)
            result = document.querySelector(resultSelector)
        },
        add: () => {
            result.value = Number(firstElement.value) + Number(secondElement.value)
        },
        subtract: () => {
            result.value = Number(firstElement.value) - Number(secondElement.value)
        }
    }
}

let calculate = calculator()
calculate.init('#num1', '#num2', '#result');

let add = calculate.add
let subtract = calculate.subtract
