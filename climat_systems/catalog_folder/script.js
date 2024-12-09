const outputDiv = document.getElementById('output');
const filterApplyButton = document.getElementById('apply');
const brandInputs = document.querySelectorAll('[name=Brand]');
const applyButton = document.getElementById('apply');
const priceInputs = document.querySelectorAll('input[type=number]');

const saveChecked = e => {
    const brandForSave = Array.from(brandInputs).filter(element => element.checked).map(element => element.value);
    localStorage.setItem('checkedBoxes', JSON.stringify(brandForSave));
}

const savePrice = e => {
    const priceInputsArr = Array.from(priceInputs).filter(e => !!e.value);
    localStorage.setItem('priceInputs', JSON.stringify(priceInputsArr));
    console.log(priceInputsArr)
}

