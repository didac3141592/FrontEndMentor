
let data;
let theme = "light";

const SELECT = document.querySelector("#filter");
const SEARCH = document.querySelector("#search");
const CARDS_CONTAINER = document.querySelector("#cards-container");


function getCountryInformation(region, country, theme) {
  if (!region && !country) {
    for (let i = 0; i < data.length; i++) {
      createCard(data[i]["flag"], data[i]["name"], data[i]["population"], data[i]["region"], data[i]["capital"], theme);
    }
  }
  else if (region && country) {
    for (let i = 0; i < data.length; i++) {
      if (data[i]["region"] == region) {
        if (data[i]["name"].startsWith(country)) {
          createCard(data[i]["flag"], data[i]["name"], data[i]["population"], data[i]["region"], data[i]["capital"], theme);
        }
      }
    }
  } else if (region) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].region == region) {
        createCard(data[i]["flag"], data[i]["name"], data[i]["population"], data[i]["region"], data[i]["capital"], theme);
      }
    }
  } else if (country) {
    for (let i = 0; i < data.length; i++) {
      if (data[i]["name"].startsWith(country)) {
        createCard(data[i]["flag"], data[i]["name"], data[i]["population"], data[i]["region"], data[i]["capital"], theme);
      }
    }
  }
};
function cleanContainer() {
  CARDS_CONTAINER.innerHTML = "";
};
function showMoreDetails(event) {
  let country;

  if(!event.target.parentNode.id) {
    country = event.target.parentNode.parentNode.id;
  } else {
    country = event.target.parentNode.id;
  }

  localStorage.setItem("country", country); 
  localStorage.setItem("theme", theme);

  window.location.href = "/details.html";
};


SELECT.addEventListener("change", function (event) {
  cleanContainer();
  const REGION = event.target.value;
  getCountryInformation(REGION, undefined, theme);
  SEARCH.value = ""
});

SEARCH.addEventListener("input", function (event) {
  cleanContainer();
  const COUNTRY = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
  getCountryInformation(SELECT.value, COUNTRY, theme);
});



