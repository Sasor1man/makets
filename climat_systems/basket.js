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