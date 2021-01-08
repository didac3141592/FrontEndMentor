

let country = localStorage.getItem("country");
let theme = localStorage.getItem("theme");

const URL = "https://restcountries.eu/rest/v2/name/" + country

fetch(URL)
    .then((response) => response.text())
    .then((data) => storeData(JSON.parse(data)))


function storeData(response) {
    data = response;
    console.log(data)
    // getCountryInformation();
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

//     function storeData(info) {
//         if(theme == "dark") {
//             CARD.classList.add("bg-dark", "text-light", "border-secondary")
//             document.body.classList.add("bg-dark")
//         }
//         data = info;
//         IMAGE.setAttribute("src", data[0]["flag"])
//         COUNTRY.textContent = data[0]["name"]
//         POPULATION.textContent += data[0]["population"]
//         REGION.textContent += data[0]["region"]
//         CAPITAL.textContent += data[0]["capital"]
//         if(data[0]["borders"].length == 0) {
//             BORDERS.textContent = "No bordering countries"
//         }
//         else {
//             BORDERS.textContent = "Border countries are: "
//             for(let i=0; i<data[0]["borders"].length; i++) {
//                 BORDERS.textContent += data[0]["borders"][i] + " "
//             }
//         }

//         console.log(data)
//       }

const BACK_BUTTON = document.querySelector("#back-button");

BACK_BUTTON.addEventListener("click", function() {
    window.location.href = "/index.html";
}) 








