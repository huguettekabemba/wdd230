function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamb").classList.toggle("open");
}
const x = document.getElementById('hamb');
x.onclick = toggleMenu;