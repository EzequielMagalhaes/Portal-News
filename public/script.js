/*  JAVASCRIPT DA PÁGINA   */
var busca = document.getElementById("busca");
var btnClear = document.getElementsByClassName("deleteIcon");// getElementsByClassName gera um array, para obter o elemento da div deve especificar sua posição dentro do array;
var bookmark = document.getElementById("bookmark");
var bookmarkFill = document.getElementById("bookmarkFilled");

busca.addEventListener("input", ()=>{
if (busca.value.trim() !== "") {
    btnClear[0].style.display = "inline-block";

} else {
    btnClear[0].style.display = "none";
    }
});
    btnClear[0].addEventListener("click", ()=>{
        busca.value = "";
        btnClear[0].style.display = "none";
    });

function like() {
    var bookmark = document.getElementById("bookmark");
    var bookmarkFilled = document.getElementById("bookmarkFilled");
    
    if (bookmark.style.display === "none") {
        bookmark.style.display = "block";
        bookmarkFilled.style.display = "none";
    } else {
        bookmark.style.display = "none";
        bookmarkFilled.style.display = "block";
    }
}