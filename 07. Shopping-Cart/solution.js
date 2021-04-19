function solve() {

   const output = document.querySelector('textarea')
   document.querySelector('.shopping-cart').addEventListener('click', onClick)

   let cart = {}

   function onClick(ev) {
      if (ev.target.tagName == 'BUTTON' && ev.target.className == 'add-product') {
         const product = ev.target.parentNode.parentNode
         const title = product.querySelector('.product-title').textContent
         const price = Number(product.querySelector('.product-line-price').textContent)

         if (!cart.hasOwnProperty(title)) {
            cart[title] = 0
         }

         cart[title] += price

         output.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`
      }
   }

   document.querySelector('.checkout').addEventListener('click', checkOut)

   function checkOut() {
      const items = Object.keys(cart).join(', ')
      const totalPrice = Object.values(cart).reduce((sum, acc) => sum + acc, 0)
      output.value += `You bought ${items} for ${totalPrice.toFixed(2)}.`

      const buttons = Array.from(document.querySelectorAll('.add-product'))
      buttons.forEach(btn => {
         btn.disabled = true
      });
      document.querySelector(".checkout").disabled = true
   }
}