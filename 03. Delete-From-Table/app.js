function deleteByEmail() {

    const input = document.querySelector('input[name="email"]').value
    const rows = Array.from(document.querySelectorAll('tbody tr'))
    let result = document.getElementById('result')

    const matches = rows.filter(r => r.children[1].textContent == input)
    if (matches.length > 0) {
        matches.forEach(r => r.remove())
        result.textContent = 'Deleted.'
    } else {
        result.textContent = 'Not found.'
    }
}

/**
function deleteByEmail() {

    const input = document.querySelector('input[name="email"]').value
    const rows = Array.from(document.querySelectorAll('tbody tr'))
    let match = false
    let result = document.getElementById('result')

    for (let row of rows) {
        if (row.children[1].textContent == input) {
            row.remove()
            result.textContent = 'Deleted.'
            match = true
        }
    }

    if (match == false){
        result.textContent = 'Not found.'
    }
} 
 */