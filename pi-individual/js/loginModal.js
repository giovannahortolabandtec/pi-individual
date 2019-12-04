var modal = document.getElementById("myModal1");
// o botão abre o modal
var btn = document.getElementById("loginModal");
var span = document.getElementsByClassName("close")[0];
// ao clicar no botão o modal abre
btn.onclick = function () {
    modal.style.display = "block";
}
// Quando o usuário clicar em <span> (x), feche o modal
span.onclick = function () {
    modal.style.display = "none";
}
// Quando o usuário clicar em qualquer lugar fora do modal ele fecha
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
