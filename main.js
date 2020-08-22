const $btn = document.getElementById('btn-kick');
const $btnTwo = document.getElementById('btn-kick-two');
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character')
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy')
}
$btnTwo.addEventListener('click', function (){
    console.log('SuperKick');
    changeHP(random(20), character);
    changeHP(random(20), enemy);
})
$btn.addEventListener('click', function () {
    console.log('Kick');
    changeHP(random(10), character);
    changeHP(random(10), enemy);
});
function init () {
    console.log('Начнем игру!');
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person) {
    renderProgressbarHP(person);
    renderHPLite(person);

}

function renderHPLite(person) {
    person.elHP.innerText = person.damageHP + '/'+ person.defaultHP;
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
    if (person.damageHP < count) {
        person.damageHP = 0;
        alert('Бедняга ' + person.name+' проиграл!');
        $btn.disabled = true;
        $btnTwo.disabled = true;
    } else {
        person.damageHP -= count;
    }
    renderHP(person);
}
function random(num) {
    return Math.ceil(Math.random()*num);
}

init()