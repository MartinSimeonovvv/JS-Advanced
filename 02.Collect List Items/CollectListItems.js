function extractText() {

    const items = Array.from(document.querySelectorAll('li'))
    const itemsText = items.map(t => t.textContent)
    document.querySelector('#result').value = itemsText.join('\n')
}