const script = () => {
    // script -------------------------------------------------------------------------------
    const outputDiv = document.getElementById('output');
    const filterApplyButton = document.getElementById('apply');
    const brandInputs = document.querySelectorAll('[name=Brand]');
    const applyButton = document.getElementById('apply');
    const priceInputs = document.querySelectorAll('input[type=number]');
    const select = document.getElementById('select');
    const resetFilter = document.getElementById('reset');
    const catalog = document.querySelector('div.catalog_list');

    const saveChecked = e => {
        const brandForSave = Array.from(brandInputs).filter(element => element.checked).map(element => element.value);
        localStorage.setItem('checkedBoxes', JSON.stringify(brandForSave));
    }

    const saveOption = e => {
        const option = select.value;
        localStorage.setItem('selectOpt', option);
    }

    const savePrice = e => {
        const priceInputsArr = Array.from(priceInputs).map(e => e.value);
        localStorage.setItem('priceInputs', JSON.stringify(priceInputsArr));
    }

    const saveCatalog = e => {
        if (e.target.classList.contains('button2')) {
            const pickedCategory = e.target.value
            catalog.querySelectorAll('.button2').forEach(button => button.classList.remove('active'));
            e.target.classList.add('active');
            localStorage.setItem('catalog', pickedCategory);
            filterRequest();
        }
    }

    const checkPrice = () => {
        const checkForZero = element => element === 0 ? '' : element;
        const prices = Array.from(parse('priceInputs'));
        prices.sort((a, b) => a - b).map(e => checkForZero(e))
        priceInputs.forEach(e => {
            e.id === 'priceLow' ? e.value = prices[0] : e.value = prices[1]
        })
    }

    const resetFilters = () => {
        localStorage.clear();
        location.reload();
    }

    // request  -------------------------------------------------------------------------------

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
    // events -------------------------------------------------------------------------------

    priceInputs.forEach(element => element.addEventListener('selectionchange', savePrice));
    priceInputs.forEach(element => element.addEventListener("input", (event) => element.value = element.value.replace(/[^0-9]/g, "")));
    brandInputs.forEach(element => element.addEventListener('click', saveChecked));
    select.addEventListener('click', saveOption);
    resetFilter.addEventListener('click', resetFilters);
    catalog.addEventListener('click', saveCatalog);



    const parse = name => JSON.parse(localStorage.getItem(`${name}`))

    // window.addEventListener('load', e => {
    const load = () => {

        if (window.localStorage.checkedBoxes) {
            const checkedBoxes = parse('checkedBoxes');

            brandInputs.forEach(element => {
                if (checkedBoxes.includes(element.value)) element.checked = true;
            })
        }

        if (window.localStorage.products) {
            const productsArr = parse('products');
            addHtml(render(productsArr), outputDiv)
        }
        else {
            loadReq();
        }

        if (localStorage.priceInputs) checkPrice();

        if (localStorage.selectOpt) select.value = localStorage.selectOpt;

        if (localStorage.catalog) {
            const category = localStorage.catalog;
            const catalogBtns = Array.from(catalog.querySelectorAll('.button2'))
            catalogBtns.find(button => button.value === category).classList.add('active');
        }
    }
    // }
    load()

    document.addEventListener('click', e => {
        const withinBoundaries = e.composedPath().includes(priceInputs[0] || priceInputs[1]);
        if (!withinBoundaries) {
            savePrice();
            checkPrice();
        }
    })

    applyButton.addEventListener('click', filterRequest);
}