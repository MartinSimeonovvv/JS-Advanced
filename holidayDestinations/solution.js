function addDestination() {
    const [cityInput, countryInput] = document.querySelectorAll('input')
    const seasonInput = document.querySelector('#seasons')


    if (!cityInput.value || !countryInput.value) {
        return
    }

    const tbody = document.getElementById('destinationsList')
    const tr = document.createElement('tr')
    const tdCityCountry = document.createElement('td')
    const tdSeason = document.createElement('td')

    tdCityCountry.textContent = `${cityInput.value}, ${countryInput.value}`
    if (seasonInput.value == 'summer') {
        tdSeason.textContent = 'Summer'
    } else if (seasonInput.value == 'autumn') {
        tdSeason.textContent = 'Autumn'
    } else if (seasonInput.value == 'winter') {
        tdSeason.textContent = 'Winter'
    } else if (seasonInput.value == 'spring') {
        tdSeason.textContent = 'Spring'
    }

    tr.appendChild(tdCityCountry)
    tr.appendChild(tdSeason)
    tbody.appendChild(tr)

    cityInput.value = ''
    countryInput.value = ''

    const [summer, autumn, winter, spring] = Array.from(document.querySelectorAll('#summaryBox input'))

    if (tdSeason.textContent == 'Summer') {
        summer.value++
    } else if (tdSeason.textContent == 'Autumn') {
        autumn.value++
    } else if (tdSeason.textContent == 'Spring') {
        spring.value++
    } else if (tdSeason.textContent == 'Winter') {
        winter.value++
    }
}