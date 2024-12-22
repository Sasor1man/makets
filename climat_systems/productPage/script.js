const productPage = () => {
    const line = document.getElementById('bl');
    const description = document.getElementById('description');
    const characteristic = document.getElementById('characteristic');
    const div = document.getElementById('moveble');

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
}