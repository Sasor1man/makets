const loadDiv = document.getElementById('load');
const catalogButton = document.querySelector('[value=menuButton]');
const mainButton = document.querySelector('[alt=head-pict]');
const moreButton = document.querySelector('[value=moreBtn]');
const navButtons = document.getElementById('menu_cont');
const basketUl = document.getElementById('basket-ul');
const basketSpan = document.getElementById('basket-span');
const basketButton = document.getElementById('header_left');

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
    const productTitle = encodeURIComponent(localStorage.getItem('currentProductName'));
    const currentProduct = localStorage.getItem('currentProduct')
    switch (stateStr) {
        case 'main': mainPageRequest(); break;
        case 'catalog': catalogPageRequest(); break;
        case `${productTitle}`: descriptionPageRequest(currentProduct);
        // case '': mainPageRequest();
    }
}
checkHash();
window.addEventListener('hashchange', checkHash);

const changeBasket = () => {
    const productList = JSON.parse(localStorage.getItem('basket')) || [];
    basketSpan.textContent = productList.length || 0;

    const forInner = productList.map(e => {
        return `<li>
            <img src="${e.photoSrc}" alt="${e.alt}">
            <p>${e.title}</p>
            <svg fill="#000000" height="800px" width="800px" version="1.1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 490 490" xml:space="preserve" data-title="${e.title}">
                <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
                489.292,457.678 277.331,245.004 489.292,32.337" />
            </svg>
        </li>`;
    }).join('');
    basketUl.innerHTML = forInner;
};

basketUl?.addEventListener('click', e => {
    const target = e.target;

    if (target.tagName === 'P') {
        const prod = JSON.parse(localStorage.getItem('basket')).find(
            e => e.title === target.textContent.trim()
        );
        if (prod) {
            descriptionPageRequest(prod);
        }
    }

    const svgElement = target.closest('svg');
    if (svgElement) {
        const prodTitle = svgElement.getAttribute('data-title');
        const productList = JSON.parse(localStorage.getItem('basket')) || [];

        const prodInd = productList.findIndex(prod => prod.title === prodTitle);

        if (prodInd !== -1) {
            productList.splice(prodInd, 1);
            localStorage.setItem('basket', JSON.stringify(productList));

            changeBasket();
        }
    }
});

const updateBasket = (productList) => {
    localStorage.setItem('basket', JSON.stringify(productList));
    changeBasket();
};

const productList = JSON.parse(localStorage.getItem('basket')) || [];
updateBasket(productList);

changeBasket();

basketButton.addEventListener('click', e => {
    if (e.target === basketButton) {
        basketUl.classList.toggle('basketRight');
    }
})

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
                if (target.tagName === 'BUTTON') {
                    window.location.hash = 'page';
                    descriptionPageRequest();
                };
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

