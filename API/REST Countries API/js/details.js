

let country = localStorage.getItem("country");
let theme = localStorage.getItem("theme");

const URL = "https://restcountries.eu/rest/v2/name/" + country

fetch(URL)
    .then((response) => response.text())
    .then((data) => storeData(JSON.parse(data)))


function storeData(response) {
    data = response;
    getDetails();
};

const IMAGE = document.querySelector("#image");
const COUNTRY = document.querySelector("#country");
const NATIVE_NAME = document.querySelector("#native-name");
const POPULATION = document.querySelector("#population");
const REGION = document.querySelector("#region");
const SUB_REGION = document.querySelector("#sub-region");
const CAPITAL = document.querySelector("#capital");
const DOMAIN = document.querySelector("#domain");
const CURRENCIES = document.querySelector("#currencies");
const LANGUAGES = document.querySelector("#languages");
const BORDERS = document.querySelector("#borders");
const CARD = document.querySelector(".card");

function getDetails() {
    IMAGE.setAttribute("src", data[0]["flag"]);
    COUNTRY.innerHTML = data[0]["name"];
    NATIVE_NAME.innerHTML += data[0]["nativeName"];
    POPULATION.innerHTML += data[0]["population"];
    REGION.innerHTML += data[0]["region"];
    SUB_REGION.innerHTML += data[0]["subregion"];
    CAPITAL.innerHTML += data[0]["capital"];
    DOMAIN.innerHTML += data[0]["demonym"];
    for(let i=0; i<data[0]["currencies"].length; i++) {
        CURRENCIES.innerHTML += data[0]["currencies"][i]["name"];
    }
    for(let i=0; i<data[0]["languages"].length; i++) {
        LANGUAGES.innerHTML += data[0]["languages"][i]["name"] + " ";
    }
    if(data[0]["borders"].length == 0) {
        BORDERS.innerHTML += "No bordering contries"
    }
    for(let i=0; i<data[0]["borders"].length; i++) {
        BORDERS.innerHTML += data[0]["borders"][i] + "  ";
    }
};




const BACK_BUTTON = document.querySelector("#back-button");

BACK_BUTTON.addEventListener("click", function() {
    window.location.href = "/index.html";
}) 

if(theme == "dark") {
    setDarkTheme();
}








