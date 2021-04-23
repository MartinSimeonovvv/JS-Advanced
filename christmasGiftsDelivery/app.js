function solution() {

    const [gifts, sent, discarded] = document.querySelectorAll('section ul')
    const input = document.querySelector('input')
    document.querySelector('button').addEventListener('click', addGift)

    function addGift() {
        const name = input.value
        input.value = ''

        const element = e('li', name, 'gift')
        const sendBtn = e('button', 'Send', 'sendButton')
        const discardBtn = e('button', 'Discard', 'discardButton')
        element.appendChild(sendBtn)
        element.appendChild(discardBtn)

        sendBtn.addEventListener('click', () => dispatchGift(sent, name, element))
        discardBtn.addEventListener('click', () => dispatchGift(discarded, name, element))

        gifts.appendChild(element)

        sortGifts()
    }

    function dispatchGift(target, name, gift) {
        gift.remove()
        const element = e('li', name, 'gift')
        target.appendChild(element)
    }

    function sortGifts() {
        Array.from(gifts.children)
            .sort((a, b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent))
            .forEach(g => gifts.appendChild(g))
    }

    function e(type, content, className) {
        const result = document.createElement(type)
        result.textContent = content
        if (className) {
            result.className = className
        }
        return result
    }
}
