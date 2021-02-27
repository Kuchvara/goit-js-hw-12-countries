function fetchCounries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(`Wrong request ${error}`));
}

export default fetchCounries;
