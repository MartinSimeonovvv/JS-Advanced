function solve() {

    const selectMenu = document.getElementById('selectMenuTo')

    const binary = document.createElement('option')
    binary.value = 'binary'
    binary.textContent = 'Binary'

    const hexadecimal = document.createElement('option')
    hexadecimal.value = 'hexadecimal'
    hexadecimal.textContent = 'Hexadecimal'

    selectMenu.appendChild(binary)
    selectMenu.appendChild(hexadecimal)

    const type = {
        'binary': i => i.toString(2),
        'hexadecimal': i => i.toString(16).toUpperCase()
    }

    document.querySelector('button').addEventListener('click', () => {
        const input = document.getElementById('input')
        const result = document.getElementById('result')
        result.value = type[selectMenu.value](Number(input.value))
    })
}