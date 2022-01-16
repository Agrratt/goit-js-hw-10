export function listInfoCountry({ flags, name }) {
    return `<li class ="short-desc">
 <img src="${flags.svg}" alt="${name.official}" width =50/>
  <h2 class = "country-list_name">${name.official}</h2>
  </li>`
}