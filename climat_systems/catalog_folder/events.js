const outputDiv = document.getElementById('output');

const filterApplyButton = document.getElementById('apply');
const brandInputs = document.querySelectorAll('[name=Brand');

const checkedArr = [];

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
})