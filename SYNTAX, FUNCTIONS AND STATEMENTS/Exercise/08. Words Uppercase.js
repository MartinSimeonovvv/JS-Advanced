function words(str) {

    return str.toUpperCase().match(/\w+/gm).join(', ');
}
console.log(words('Hi, how are you?'))