// Solving problems using array functions on rest countries data.
// Get all the countries from Asia continent /region using Filter function
// Get all the countries with a population of less than 2 lakhs using Filter function
// Print the following details name, capital, flag using forEach function
// Print the total population of countries using reduce function
// Print the country which uses US Dollars as currency.

fetch("https://restcountries.eu/rest/v2/all")
  .then((resp) => {
    return resp.json();
  })
  .then((result) => {
    //console.log(result);

    //filtering countries using region as Asia
    let countryAsia = result.filter((each) => {
      return each.region === "Asia";
    });
    console.log(countryAsia);

    //filtering countries using population below 200000
    let population = result.filter((each) => {
      return each.population < 200000;
    });
    console.log(population);

    //printing all country names
    result.forEach((each) => {
      console.log(each.name);
    });
    //printing all capital names
    result.forEach((each) => {
      console.log(each.capital);
    });

    //printing all flag urls
    result.forEach((each) => {
      console.log(each.flag);
    });

    //total population of countries
    let totalPopulation = result.reduce((total, individual) => {
      return total + individual.population;
    }, 0);
    console.log(totalPopulation);

    //filtering countries that uses dollar as currency
    let dollar = result.filter((each) => {
      return each.currencies[0].name === "United States dollar";
    });
    console.log(dollar);
  })
  .catch((err) => {
    console.log(err);
  });
