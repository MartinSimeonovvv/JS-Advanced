function gcd(x, y) {

    while (y) {
        let t = y;
        y = x % y;
        x = t;
    }

    console.log(x);
}
gcd(2154, 458)