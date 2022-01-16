export function oneInfoCountry({ flags, capital, population, languages, name }) {
    return `
    <div class="country">
      <img class = "capital-flag" src="${flags.svg}" alt="${name.official}" width = 50/>
      <h2 class = "desc-text">Country: ${name.official}</h2>
      <p class = "desc-text">Capital: ${capital}</p>
      <p class="desc-text">Population: ${population}</p>
      <p class="desc-text">Languages: ${Object.values(languages)}</p>
    </div>`
}