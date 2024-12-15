const loadDiv = document.getElementById('load');
const catalogButton = document.querySelector('[value=menuButton]')

const mainPageRequest = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "back/page1.html");

    xhr.send();

    xhr.onload = () => {
        loadDiv.removeAttribute('class');
        loadDiv.innerHTML = xhr.responseText;
        localStorage.setItem('pageNum', 0);
        catalogButton.removeAttribute('class');
        catalogButton.setAttribute('id', 'menuButton');
    }
}

const catalogPageRequest = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "back/page2.html");

    xhr.send();

    xhr.onload = () => {
        loadDiv.innerHTML = xhr.responseText;
        localStorage.setItem('pageNum', 1);
        loadDiv.classList.add('catalog');
        script();
        catalogButton.removeAttribute('id');
        catalogButton.classList.add('active-catalog');
        mainLink = document.getElementById('returnMain');
        mainLink.addEventListener('click', mainPageRequest);
    }
}

window.addEventListener('load', e => {
    const currentPage = localStorage.getItem('pageNum')
    switch (currentPage) {
        case '0': mainPageRequest(); break;
        case '1': catalogPageRequest(); break;
        default: mainPageRequest();
    }

})

catalogButton.addEventListener('click', catalogPageRequest);
