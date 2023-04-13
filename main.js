const $decrease = document.getElementById('decrease');
const $reset = document.getElementById('reset');
const $increase = document.getElementById('increase');
const $number = document.querySelector('h2');

let number = Number($number.textContent)

function changeNumber (){
    $number.innerHTML = number
    if (number < 0){
        $number.style.color = "#ff3300";
    }
    else if (number > 0) {
        $number.style.color = "#00ffaa";
    }
    else {
        $number.style.color = "#222";
    }
}

$decrease.addEventListener('click', function(){
    number = number -1;
    changeNumber();
})
$reset.addEventListener('click', function(){
    number = 0
    changeNumber();
})
$increase.addEventListener('click', function(){
    number++;
    changeNumber();
})

//en el vídeo usaron QuerySelectorALl para los botones
//foreach para hacerle un un AddEventListener a cada uno
//y currenTarget para cambiarle el classlist al (e)