priceInputs.forEach(element => element.addEventListener('selectionchange', savePrice));
priceInputs.forEach(element => element.addEventListener("input", (event) => element.value = element.value.replace(/[^0-9]/g, "")));
brandInputs.forEach(element => element.addEventListener('click', saveChecked));
select.addEventListener('click', saveOption);

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

})

applyButton.addEventListener('click', filterRequest);