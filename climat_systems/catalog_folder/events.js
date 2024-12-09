priceInputs.forEach(element => element.addEventListener('selectionchange', savePrice))
brandInputs.forEach(element => element.addEventListener('click', saveChecked))

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

    if (localStorage.priceInputs) {
        const prices = parse('priceInputs')
        prices.
    }
})

applyButton.addEventListener('click', filterRequest);