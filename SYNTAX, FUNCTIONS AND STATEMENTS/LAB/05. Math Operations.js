function mathOper(a, b, operation) {

    switch (operation) {
        case '+': console.log(a + b); break;
        case '-': console.log(a - b); break;
        case '*': console.log(a * b); break;
        case '/': console.log(a / b); break;
        case '%': console.log(a % b); break;
        case '**': console.log(a ** b); break;
    }
}
mathOper(5, 6, '-')