function squareOfStars(star) {

    if (star) {
        let starsPrint = []
        for (let i = 0; i < star; i++) {
            starsPrint.push('*')
        }
        for (let i = 0; i < star; i++) {
            console.log(starsPrint.join(' '));
        }
    } else {
        star = 5
        let starsPrint = []
        for (let i = 0; i < star; i++) {
            starsPrint.push('*')
        }
        for (let i = 0; i < star; i++) {
            console.log(starsPrint.join(' '));
        }
    }
}
squareOfStars()