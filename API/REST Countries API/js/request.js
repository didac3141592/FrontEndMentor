const API_URL = "https://restcountries.eu/rest/v2/all";

fetch(API_URL)
  .then((response) => response.text())
  .then((data) => storeData(JSON.parse(data)));

function storeData(response) {
    data = response;
    getCountryInformation();
};