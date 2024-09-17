const menu = document.getElementById('menu_cont');
const menuButton = document.getElementById('menuButton');

function dropDown(element) {
    element.classList.remove('hide');
    element.classList.add('show');
}

const disappear = (element) => {
    element.classList.remove('show');
    element.classList.add('hide');
}

menuButton.onclick = function () {
    dropDown(menu);
}

document.addEventListener('click', function (event) {
    if (!menuButton.contains(event.target)) {
        disappear(menu);
    };
})