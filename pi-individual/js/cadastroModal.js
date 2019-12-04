var modal2 = document.getElementById("myModal2");

var btn2 = document.getElementById("cadastroModal");

btn2.onclick = function () {
    modal2.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}