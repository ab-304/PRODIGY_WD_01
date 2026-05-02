window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.backgroundColor = "teal";
    } else {
        nav.style.backgroundColor = "burlywood";
    }
});