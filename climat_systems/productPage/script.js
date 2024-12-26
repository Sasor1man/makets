const productPage = (currentProduct) => {
    const line = document.getElementById('bl');
    const description = document.getElementById('description');
    const characteristic = document.getElementById('characteristic');
    const div = document.getElementById('moveble');
    const orderButton = document.getElementById('order');

    let isMoved = false;

    characteristic.addEventListener('click', () => {
        // isMoved = !isMoved;
        line.classList.add('moved');
        div.classList.add('moved2');

    });
    description.addEventListener('click', () => {
        line.classList.remove('moved');
        div.classList.remove('moved2');

    });

    const saveOrder = () => {
        localStorage.setItem('basket', JSON.stringify(currentProduct))
    }

    orderButton.addEventListener('click', saveOrder)
}