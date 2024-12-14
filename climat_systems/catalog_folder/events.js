priceInputs.forEach(element => element.addEventListener('selectionchange', savePrice));
priceInputs.forEach(element => element.addEventListener("input", (event) => element.value = element.value.replace(/[^0-9]/g, "")));
brandInputs.forEach(element => element.addEventListener('click', saveChecked));
select.addEventListener('click', saveOption);
resetFilter.addEventListener('click', resetFilters);
catalog.addEventListener('click', saveCatalog);



const parse = name => JSON.parse(localStorage.getItem(`${name}`))

window.addEventListener('load', e => {
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

})

document.addEventListener('click', e => {
    const withinBoundaries = e.composedPath().includes(priceInputs[0] || priceInputs[1]);
    if (!withinBoundaries) {
        savePrice();
        checkPrice();
    }
})

applyButton.addEventListener('click', filterRequest);