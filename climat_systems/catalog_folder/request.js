const productList = [];

const addHtml = (tag, div) => div.innerHTML = tag

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

const filterRequest = () => {
    const xhr = new XMLHttpRequest();

    const filters = localStorage.getItem('checkedBoxes');
    const queryParams = `filters=${encodeURIComponent(filters)}`;

    xhr.open('GET', `http://localhost:3000?${queryParams}`);

    xhr.responseType = 'json';

    xhr.send();

    xhr.onload = arr => {
        const response = xhr.response;
        const get = response.filters;
        const modelArr = [...get];
        addHtml(render(modelArr), outputDiv)
        console.log(get)
    }
}