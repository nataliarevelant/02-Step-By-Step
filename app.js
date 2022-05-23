var passoAtual = 0

var buttonRight = document.querySelector('img.arrow-right')

var buttonLeft = document.querySelector('img.arrow-left')

buttonRight.addEventListener('click', scrollHorizontal)

function scrollHorizontal (event) {

    passoAtual++

    var target = document.querySelector('.step-' + passoAtual)
    
    target.scrollIntoView()

}