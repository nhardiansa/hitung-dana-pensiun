const menuIcon = document.querySelector("span.menu");
const closeIcon = document.querySelector("span.close");
const menuBar = document.getElementById("close-menu")

const linkMenu = menuBar.querySelectorAll("li")

linkMenu.forEach(e => {
    e.addEventListener("click", (e) => {
        menuBar.style.transform = "translateY(-2.5em)"
        closeIcon.style.display = "none"
        menuIcon.style.display = "block"
    })
});

menuIcon.addEventListener("click", () => {
    menuIcon.style.display = "none"
    closeIcon.style.display = "block"
    menuBar.style.transform = "translateY(0)"
    
})

closeIcon.addEventListener("click", () => {
    menuBar.style.transform = "translateY(-2.5em)"
    closeIcon.style.display = "none"
    menuIcon.style.display = "block"
})