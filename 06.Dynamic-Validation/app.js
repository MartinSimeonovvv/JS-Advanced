function validate() {
    const input = document.querySelector('input')
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/g

    input.addEventListener('change', () => {
        if (!pattern.test(input.value) || input.value == '') {
            input.classList.add('error')
        } else {
            input.removeAttribute('class')
        } 
    })
}