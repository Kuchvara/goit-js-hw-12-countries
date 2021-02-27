import countriesListTpl from '../templates/countries-list.hbs';
import countryTpl from '../templates/country.hbs';
import { markupListRef } from './refs';
import alert from './notify';

function countriesMarkup(data) {
  const markupList = countriesListTpl(data);
  const markupCountry = countryTpl(data);

  if (data.status === 404) {
    alert({
      type: 'notice',
      text: 'Not found',
      delay: 1000,
      width: '320px',
      maxTextHeight: null,
    });
  }

  if (data.length === 1) {
    markupListRef.insertAdjacentHTML('beforeend', markupCountry);
    return;
  }
  
  if (data.length >= 2 && data.length <= 10) {
    markupListRef.insertAdjacentHTML('beforeend', markupList);
    return;
  }

  if (data.length > 10) {
      alert({
      type: 'error',
      text: 'Too many matches found. Please enter a more specific query!',
      delay: 1000,
      maxTextHeight: null,
    });
    return;
  }  
}

export default countriesMarkup;