const hamburger = document.getElementById("hamburger")
const nav = document.getElementById("top")
const nav1 = document.getElementById("top1")

hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
})
hamburger.addEventListener("click", () => {
    nav1.classList.toggle("show");
})