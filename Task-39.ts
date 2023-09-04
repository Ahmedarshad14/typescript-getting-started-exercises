function am (city:string, country:string) {
  city =  city[0].toUpperCase() + city.slice(1);
  country =  country[0].toUpperCase() + country.slice(1);
    return `${city}, ${country}.`;
}

console.log(am("lahore", "pakistan"))
console.log(am("colombo", "Sri Lanka"))
console.log(am("tokyo", "japan"))