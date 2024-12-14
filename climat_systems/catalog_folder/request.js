const productList = [];

const addResponce = XMLHttpRequest => {
    const response = XMLHttpRequest.response;
    const modelArr = response.filters;
    addHtml(render(modelArr), outputDiv);
    localStorage.setItem('products', JSON.stringify(modelArr));
}

const addHtml = (tag, div) => div.innerHTML = tag

const error = xhr => {
    const errorDiv = `<p>ERROR</p>`;
    addHtml(errorDiv, outputDiv);
}

const render = data => {
    const outputHtml = data.map(e => `
    <div class="models_lins card">
    <img src="${e.photoSrc}" alt="${e.alt}">
    <h3>${e.title}</h3>
    <p>${e.price} руб.</p>
    <button class="button">Подробнее</button>
    </div>
    `).join('')
    return outputHtml
}

const loadReq = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://localhost:3000`);

    xhr.responseType = 'json';

    xhr.send();

    xhr.onerror = error(xhr);

    xhr.onload = arr => addResponce(xhr)
}

const filterRequest = () => {

    saveOption();

    const xhr = new XMLHttpRequest();

    const filters = localStorage.getItem('checkedBoxes');
    const prices = localStorage.getItem('priceInputs');
    const select = localStorage.getItem('selectOpt');
    const category = localStorage.getItem('catalog');

    const queryParams = `category=${encodeURIComponent(category)}&filters=${encodeURIComponent(filters)}&prices=${encodeURIComponent(prices)}&opt=${encodeURIComponent(select)}`;

    xhr.open('GET', `http://localhost:3000?${queryParams}`);

    xhr.responseType = 'json';

    xhr.send();

    xhr.onerror = error(xhr);

    xhr.onload = e => addResponce(xhr)
}
