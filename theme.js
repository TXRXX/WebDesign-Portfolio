let btn = document.querySelector(".fa-moon");
let isDark = true;
// let text = document.querySelector(".theme-text");


btn.addEventListener("click", function(){
    if (isDark) {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
        btn.classList.remove("fa-moon");
        btn.classList.add("fa-sun");
        // text.textContent = "LIGHT MODE";

    }
    else {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
        btn.classList.remove("fa-sun");
        btn.classList.add("fa-moon");
        // text.textContent = "DARK MODE";
        
    }
    isDark = !isDark
})

let currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    isDark = true;
    btn.classList.remove("fa-sun");
    btn.classList.add("fa-moon"); 
    // text.textContent = "DARK MODE";
}
else if (currentTheme === "light"){
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
    isDark = false;
    btn.classList.remove("fa-moon");
    btn.classList.add("fa-sun");
    // text.textContent = "LIGHT MODE";

}