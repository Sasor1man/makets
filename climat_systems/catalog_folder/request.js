const xhr = new XMLHttpRequest();

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

xhr.open('GET', "../back/bs.json");

xhr.responseType = 'json';

xhr.send()

xhr.onload = arr => {
    const get = xhr.response;
    const modelArr = [...get];
    addHtml(render(modelArr), outputDiv)
}


