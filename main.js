const menu = document.getElementsByClassName("menu-item")

for (let i = 0; i < menu.length; i++) {
    const item = menu[i];

    item.addEventListener("mouseenter", function () {
        const submenu = item.getElementsByClassName("submenu")
        submenu.style.display = "block"
    })

    item.addEventListener("mouseleave", function () {
        const submenu = item.getElementsByClassName("submenu")
        submenu.style.display = "none"
    })
}
