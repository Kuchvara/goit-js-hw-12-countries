import { searchForm, inputRef, resetButtonRef, markupListRef } from './refs';
import debounce from 'lodash/debounce';
import fetchCountries from './fetchCountries';
import updateCountriesList from './countriesMarkup';

inputRef.addEventListener('input', debounce(findCountries, 500));
resetButtonRef.addEventListener('click', clearContainer);
searchForm.addEventListener('submit', event => {
  event.preventDefault();
});

function findCountries(event) {
  const searchQuery = event.target.value;

  fetchCountries(searchQuery).then(updateCountriesList);

  markupListRef.addEventListener('click', choiseResults); 

  clearContainer();
}

function choiseResults(event) {
  inputRef.value = event.target.textContent;

  fetchCountries(inputRef.value).then(updateCountriesList);

  inputRef.value = '';
  markupListRef.removeEventListener('click', choiseResults);  

  clearContainer();
}

function clearContainer() {
  markupListRef.innerHTML = '';
}
