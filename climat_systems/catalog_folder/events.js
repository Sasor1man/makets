const outputDiv = document.getElementById('output');

const filterApplyButton = document.getElementById('apply');
const brandInputs = document.querySelectorAll('[name=Brand');

const filterButton = document.getElementById('apply');


const saveChecked = e => {
    const arrForSave = Array.from(brandInputs).filter(element => element.checked).map(element => element.value);
    localStorage.setItem('checkedBoxes', JSON.stringify(arrForSave));
}

brandInputs.forEach(element => element.addEventListener('click', saveChecked))

window.addEventListener('load', e => {
    if (window.localStorage.checkedBoxes) {
        const checkedBoxes = JSON.parse(localStorage.getItem('checkedBoxes'));

        brandInputs.forEach(element => {
            if (checkedBoxes.includes(element.value)) element.checked = true;
        })
    }

    if (window.localStorage.products) {
        const productsArr = JSON.parse(localStorage.getItem('products'));
        addHtml(render(productsArr), outputDiv)
    }
    else {
        loadReq();
    }
})

filterButton.addEventListener('click', filterRequest);