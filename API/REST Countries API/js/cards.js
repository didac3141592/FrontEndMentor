
function createCard(img, country, population, region, capital, theme) {
    let countryCard = document.createElement("div");
    countryCard.classList.add("card", "shadow-sm", "mx-auto", "my-5", "rounded");
    countryCard.setAttribute("style", "width: 18rem;");
    countryCard.setAttribute("id", `${country}`);

    let countryFlag = document.createElement("img");
    countryFlag.setAttribute("src", `${img}`);
    countryFlag.classList.add("card-img-top");

    let countryInfo = document.createElement("div");
    countryInfo.classList.add("card-body")

    let countryName = document.createElement("h5");
    countryName.classList.add("card-title", "p-0", "my-3");
    countryName.textContent = country;

    let countryPopulation = document.createElement("p");
    countryPopulation.classList.add("card-text", "p-0", "m-0");
    countryPopulation.textContent = `Population: ${population.toLocaleString()}`;

    let countryRegion = document.createElement("p");
    countryRegion.classList.add("card-text", "p-0", "m-0");
    countryRegion.textContent = `Region: ${region}`;

    let countryCapital = document.createElement("p");
    countryCapital.classList.add("card-text", "p-0", "m-0");
    countryCapital.textContent = `Capital: ${capital}`;

    if(theme == "dark") {  
        countryCard.classList.add("dark-elements", "dark-text");
    }
    else {
        countryCard.classList.add("light-elements", "light-text");
    }

    countryInfo.appendChild(countryName);
    countryInfo.appendChild(countryPopulation);
    countryInfo.appendChild(countryRegion);
    countryInfo.appendChild(countryCapital);

    countryCard.appendChild(countryFlag);
    countryCard.appendChild(countryInfo);

    countryCard.addEventListener("click", showMoreDetails);

    CARDS_CONTAINER.appendChild(countryCard);
};