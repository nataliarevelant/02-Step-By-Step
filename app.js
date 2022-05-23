//Declarei um contador afim de instruir o navegador sobre qual dos steps deve ser mostrado.
var passoAtual = 1

//Declarei o botão direito
var buttonRight = document.querySelector('img.arrow-right')

//Declarei o botão esquerdo
var buttonLeft = document.querySelector('img.arrow-left')

//Adicionei a função de click para que ambos os botões ouçam o evento 'scrollHorizontal', discriminado abaixo.
buttonRight.addEventListener('click', scrollHorizontal)
buttonLeft.addEventListener('click', scrollHorizontal)

function scrollHorizontal (event) {

    //Ambos os botões 'buttonRight' e 'ButtonLeft compõem o target do evento. Mas, nesse string, estou dizendo que se o target que contém a classe '.arrow-right', ele deve aumentar.
    if (event.target.className == "arrow-right") {
        passoAtual++
    // Caso contrário, deve diminuir
    } else {
        passoAtual--
    }

    var target = document.querySelector('.step-' + passoAtual)

    document.querySelectorAll('#scroll-horizontal img').forEach(img => img.classList.remove('active'))
    target.classList.add('active');

    ////

    var habilityTarget = document.querySelector('.habilitie-step-'+ passoAtual)

    var habilities = document.querySelectorAll('#habilities-aquired img')

    for (habilitie of habilities) {

        habilitie.classList.remove('active');

    }

    habilityTarget.classList.add('active');
    
    if (passoAtual == 4) {
        buttonRight.classList.add('buttonInactive')
    } else {
        buttonRight.classList.remove('buttonInactive')
    }

    if (passoAtual == 1) {
        buttonLeft.classList.add('buttonInactive')
    } else {
        buttonLeft.classList.remove('buttonInactive')
    }

}