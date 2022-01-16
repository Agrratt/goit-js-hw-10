import './css/styles.css';
import API from './fetchCountries';
import { oneInfoCountry } from './oneInfoCountry';
import { listInfoCountry } from './listInfoCountry';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const refs = {
    input: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY) )

function onSearch(e) {
    e.preventDefault(); 

    let inputValue = refs.input.value;
    if (inputValue.trim() === '') {
        refs.countryList.innerHTML = '';
        refs.countryInfo.innerHTML = '';
        return;
    };
    console.log(inputValue);

    API.fetchCountries(inputValue.trim())
        .then(countries => {
            if (countries.length > 10) {
                Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
                refs.countryList.innerHTML = '';
                refs.countryInfo.innerHTML = '';
                return;
            };
            if (countries.length >= 2 && countries.length <= 10) {
                const marcup = countries.map(country => listInfoCountry(country));
                refs.countryList.innerHTML = marcup.join('');
                refs.countryInfo.innerHTML = '';
            };
            if (countries.length === 1) {
                const fullInfo = countries.map(country => oneInfoCountry(country));
                refs.countryList.innerHTML = '';
                refs.countryInfo.innerHTML = fullInfo.join();
            }
        })
        .catch(onFetchError);
        
};

function onFetchError(error) {
    Notiflix.Notify.failure("Oops, there is no country with that name");
            return error;
}


