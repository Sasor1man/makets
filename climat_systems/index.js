const loadDiv = document.getElementById('load');
const catalogButton = document.querySelector('[value=menuButton]');
const mainButton = document.querySelector('[alt=head-pict]');
const moreButton = document.querySelector('[value=moreBtn]');
const navButtons = document.getElementById('menu_cont');

const translateCategory = category => {
    switch (category) {
        case 'cassette': return 'Кассетные кондиционеры';
        case 'multisplit': return 'Мультисплит-системы';
        case 'ceiling-floor': return 'Напольно-потолочные кондиционеры';
        case 'canal': return 'Канальные кондиционеры';
        case 'ventilation': return 'Вентиляционные установки';
        case 'freeze': return 'Холодильные сплит-системы';
    }
}

const mainPageRequest = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "back/page1.html");

    xhr.send();

    xhr.timeout = 10000

    xhr.onload = () => {
        loadDiv.removeAttribute('class');
        window.location.hash = 'main'
        loadDiv.innerHTML = xhr.responseText;
        catalogButton.removeAttribute('class');
        catalogButton.setAttribute('id', 'menuButton');
    }
}

const returnMain = () => {
    const mainLink = document.getElementById('returnMain');
    mainLink?.addEventListener('click', mainPageRequest);
}

const catalogPageRequest = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "back/page2.html");

    xhr.send();

    xhr.onload = () => {
        loadDiv.innerHTML = xhr.responseText;
        loadDiv.classList.add('catalog');
        script();
        catalogButton.removeAttribute('id');
        catalogButton.classList.add('active-catalog');
        returnMain()
    }
}

const descriptionPageRequest = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "back/page3.html");

    xhr.send();

    xhr.onload = () => {
        const cardName = localStorage.getItem('currentProductName')
        const products = JSON.parse(localStorage.getItem('products'));
        const currentProduct = products.find(e => e.title === cardName);
        let html = xhr.responseText;
        window.location.hash = currentProduct.title;


        html = html.replace(/\$\{currentProduct\.category\}/g, translateCategory(currentProduct.category));
        html = html.replace(/\$\{currentProduct\.title\}/g, currentProduct.title);
        html = html.replace(/\$\{currentProduct\.photoSrc\}/g, currentProduct.photoSrc);
        html = html.replace(/\$\{currentProduct\.alt\}/g, currentProduct.alt);
        html = html.replace(/\$\{currentProduct\.article\}/g, currentProduct.article);
        html = html.replace(/\$\{currentProduct\.brand\}/g, currentProduct.brand);
        html = html.replace(/\$\{currentProduct\.price\}/g, currentProduct.price);
        loadDiv.innerHTML = html;
        returnMain();
        productPage(currentProduct);
    }
}

const checkHash = () => {
    const stateStr = window.location.hash.slice(1);
    switch (stateStr) {
        case 'main': mainPageRequest(); break;
        case 'catalog': catalogPageRequest(); break;
        default: mainPageRequest();
    }
}
checkHash();

window.addEventListener('hashchange', checkHash)

const cfg = {
    attributes: true,
    childList: true,
    subtree: true,
}

const mutation = (mutationsList, observer) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const outputDiv = document.getElementById('output');
            outputDiv?.addEventListener('click', e => {
                const target = e.target;
                const card = target.parentElement;
                const cardName = card.childNodes[3].outerText;
                localStorage.setItem('currentProductName', cardName);
                if (target.tagName === 'BUTTON') descriptionPageRequest();
            });
        }
    }
}

const observer = new MutationObserver(mutation);

observer.observe(loadDiv, cfg);

catalogButton.addEventListener('click', () => window.location.hash = 'catalog');

navButtons.addEventListener('click', e => {
    const button = e.target;
    const value = button.dataset.value
    localStorage.setItem('catalog', value);
})

mainButton.addEventListener('click', mainPageRequest)

