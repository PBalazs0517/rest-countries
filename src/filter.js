export default function() {
    const id = this.id;
    const countries = Array.from(document.getElementsByClassName("country"));
    countries.forEach(c => {
        c.classList.add("hideCountry");
        let region = c.children[2].children[1].innerText.slice(8, c.children[2].children[1].innerText.length).toLowerCase();
        if(region === "americas") {
            region = region.slice(0, region.length - 1)
        }
        if(region === id) { 
            c.classList.remove("hideCountry"); 
        }
        if(id === "all") {
            c.classList.remove("hideCountry");
        }
    })
}