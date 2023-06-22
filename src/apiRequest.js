export async function countryByName(c) {
    const request = await fetch(`https://restcountries.com/v3.1/name/${c}?fullText=true;fields=flags,region,population,capital,name`)
    const requestJson = await request.json();
    return requestJson;
}
export async function allCountries() {
    const request = await fetch("https://restcountries.com/v3.1/all?fields=flags,region,population,capital,name")
    const requestJson = await request.json();
    return requestJson;
}
export async function countryByNameDetailed(c) {
    const request = await fetch(`https://restcountries.com/v3.1/name/${c}?fields=flags,region,population,capital,subregion,currencies,languages,tld,borders,name`)
    const requestJson = await request.json();
    return requestJson;
}