window.addEventListener('load', solution);

function solution() {
  const submitBtn = document.getElementById('submitBTN')
  submitBtn.addEventListener('click', submit)
  const editBtn = document.getElementById('editBTN')
  const continueBtn = document.getElementById('continueBTN')
  const ul = document.getElementById('infoPreview')

  function submit(event) {
    event.preventDefault()

    let fullName = document.getElementById('fname')
    let email = document.getElementById('email')
    let phoneNumber = document.getElementById('phone')
    let address = document.getElementById('address')
    let postalCode = document.getElementById('code')

    if (!fullName.value || !email.value) {
      return
    }

    previewSection(fullName.value, email.value, phoneNumber.value, address.value, postalCode.value)
    submitBtn.disabled = true

    fullName.value = ''
    email.value = ''
    phoneNumber.value = ''
    address.value = ''
    postalCode.value = ''
  }

  function previewSection(fullName, email, phoneNumber, address, postalCode) {
    editBtn.disabled = false
    continueBtn.disabled = false

    const liFullName = document.createElement('li')
    liFullName.textContent = `Full Name: ${fullName}`

    const liEmail = document.createElement('li')
    liEmail.textContent = `Email: ${email}`

    const liPhoneNumber = document.createElement('li')
    liPhoneNumber.textContent = `Phone Number: ${phoneNumber}`

    const liAddress = document.createElement('li')
    liAddress.textContent = `Address: ${address}`

    const liPostalCode = document.createElement('li')
    liPostalCode.textContent = `Postal Code: ${postalCode}`

    ul.appendChild(liFullName)
    ul.appendChild(liEmail)
    ul.appendChild(liPhoneNumber)
    ul.appendChild(liAddress)
    ul.appendChild(liPostalCode)

    editBtn.addEventListener('click', () => {
      editBtn.disabled = true
      continueBtn.disabled = true

      document.getElementById('fname').value = fullName;
      document.getElementById('email').value = email;
      document.getElementById('phone').value = phoneNumber;
      document.getElementById('address').value = address;
      document.getElementById('code').value = postalCode;
      Array.from(ul.children).forEach(c => c.remove())

      submitBtn.disabled = false
    })

    continueBtn.addEventListener('click', () => {
      const div = document.getElementById('block')
      div.innerHTML = ''
      const h3 = document.createElement('h3')
      h3.textContent = 'Thank you for your reservation!'
      div.appendChild(h3)
    })
  }
}



