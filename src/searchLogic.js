export default function() {
    const value = this.value;
    const countries = Array.from(document.getElementsByClassName("country"));
    countries.forEach(c => {
        c.classList.remove("hideCountryIfNotMatchWSearch")
        const name = c.children[1].innerText.toLowerCase();
        if(!(name.includes(value))) {
            c.classList.add("hideCountryIfNotMatchWSearch")
        }
    })
}