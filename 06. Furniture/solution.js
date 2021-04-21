function solve() {

  const [furnitureArea, buyArea] = Array.from(document.querySelectorAll('textarea'))
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'))
  const tbody = document.querySelector('tbody')
  generateBtn.addEventListener('click', addFurniture)
  buyBtn.addEventListener('click', buyAll)

  function addFurniture() {
    JSON.parse(furnitureArea.value).forEach(f => {
      let furnitureStructure = `
        <tr>
         <td><img src="${f.img}"></td>
         <td><p>${f.name}</p></td>
         <td><p>${f.price}</p></td>
         <td><p>${f.decFactor}</p></td>
         <td><input type="checkbox"/></td>
        </tr>`

      tbody.insertAdjacentHTML(`beforeend`, furnitureStructure)
    });
  }

  function buyAll() {
    const furniture = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
      .map(input => input.parentNode.parentNode)

    const result = {
      name: [],
      totalPrice: 0,
      decFactor: 0
    }

    for (let row of furniture) {
      const cells = row.children

      const name = cells[1].children[0].textContent
      result.name.push(name)

      const price = Number(cells[2].children[0].textContent)
      result.totalPrice += price

      const factor = Number(cells[3].children[0].textContent)
      result.decFactor += factor
    }

    buyArea.value = `Bought furniture: ${result.name.join(', ')}\nTotal price: ${result.totalPrice.toFixed(2)}\nAverage decoration factor: ${result.decFactor / furniture.length}`
  }
}