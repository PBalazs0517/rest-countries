export default function() {
    document.getElementById("dropdown_body").classList.toggle("visible")
    window.addEventListener("click", e => {
        if(!(document.getElementById("dropdown").contains(e.target))) {
            document.getElementById("dropdown_body").classList.remove("visible")
        }
    })
}