const titulo = document.querySelector(".apresentation-name");
const repositories = document.querySelector('.repositories-title')
const name_web_site = document.querySelector('.title-name');
let contador = 0;

$('.card').hover(function() {
    if (contador == 0) {
        $(this).css('width', '20em');
        contador++
    } else if (contador % 2 == 0) {
        $(this).css('width', '20em');
        contador++
    } else {
        $(this).css('width', '15em');
        contador++
    }
})

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split("")
    elemento.innerHTML = ""
    textoArray.forEach((letra, i) => {
        setTimeout(function() {
            elemento.innerHTML += letra
        }, 80 * i)
    })
}

typeWriter(titulo);
typeWriter(repositories)
typeWriter(name_web_site)