const menu = document.getElementById('menu_cont');
const menuButton = document.getElementById('menuButton');

function dropDown (element) {
    element.classList.remove('hide');
   element.classList.add('show');   
}

menuButton.onclick = function () {
    dropDown(menu);
}

document.addEventListener('click', function() {
    if(!menu.contains(event.target))
})