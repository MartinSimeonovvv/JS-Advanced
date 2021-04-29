function solve() {
    const onScreenBtn = document.querySelector('#container>button')
    const displayMovie = document.querySelector('#movies ul')
    const archive = document.querySelector('#archive ul')
    const clearButton = document.querySelector('#archive>button')
    clearButton.addEventListener('click', (btn) => {
        Array.from(btn.target.parentNode.children[1].children).forEach(e => e.remove())
    })

    onScreenBtn.addEventListener('click', addMovie)

    function addMovie(e) {
        e.preventDefault();

        const [nameInput, hallInput, priceInput] = document.querySelectorAll('#container input')

        if (!nameInput.value || !hallInput.value || !Number(priceInput.value)) {
            return;
        }

        const name = nameInput.value
        const hall = hallInput.value
        const price = Number(priceInput.value).toFixed(2)

        displayMovie.innerHTML +=
            `<li>
        <span>${name}</span>
        <strong>Hall: ${hall}</strong>
        <div>
        <strong>${price}</strong>
        <input placeholder="Tickets Sold">
        <button>Archive</button>
        </div>
        </li>`

        nameInput.value = ''
        hallInput.value = ''
        priceInput.value = ''

        Array.from(displayMovie.querySelectorAll('button')).forEach(btn => btn.addEventListener('click', addArchieve))

        function addArchieve(e) {
            const ticketPrice = e.target.parentNode.children[0]
            const ticketsSold = e.target.parentNode.children[1]

            if (!Number(ticketsSold.value)) {
                return
            }

            archive.innerHTML +=
                `<li>
                <span>${e.target.parentNode.parentNode.children[0].textContent}</span>
                <strong>Total amount: ${(ticketPrice.textContent * ticketsSold.value).toFixed(2)}</strong>
                <button>Delete</button>
                </li>`

            e.target.parentNode.parentNode.remove()

            Array.from(archive.querySelectorAll('li button'))
                .forEach(btn => btn.addEventListener('click', (btn) => btn.target.parentNode.remove()))
        }
    }
}