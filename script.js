const countryInput = document.getElementById('countryInput');
const searchButton = document.getElementById('searchButton');
const search_result = document.getElementById('search_result');
const flag = document.getElementById('flag');
const name = document.getElementById('name');
const capital = document.getElementById('capital');
const continent = document.getElementById('continent');
const population = document.getElementById('population');
const currency = document.getElementById('currency');
const currencyShort = document.getElementById('currencyShort');
const language = document.getElementById('language');

searchButton.addEventListener('click', () => {
    let countryName = countryInput.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        search_result.style.display = "block";
 
        country_Data = data[0];
        console.log(country_Data);
        flag.src = country_Data.flags.svg;
        name.innerHTML = country_Data.name.common;  
        capital.innerHTML = country_Data.capital;
        continent.innerHTML = country_Data.region;
        population.innerHTML = country_Data.population;
        currency.innerHTML = country_Data.currencies[Object.keys(country_Data.currencies)[0]].name;
        currencyShort.innerHTML = country_Data.currencies[Object.keys(country_Data.currencies)[0]].symbol;
        language.innerHTML = country_Data.languages[Object.keys(country_Data.languages)[0]];
    })
});
