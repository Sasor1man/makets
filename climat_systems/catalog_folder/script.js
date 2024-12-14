const outputDiv = document.getElementById('output');
const filterApplyButton = document.getElementById('apply');
const brandInputs = document.querySelectorAll('[name=Brand]');
const applyButton = document.getElementById('apply');
const priceInputs = document.querySelectorAll('input[type=number]');
const select = document.getElementsByTagName('select')[0];
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