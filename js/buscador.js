const searchButton = document.querySelector('.menu__buscador-icon');
const inputSearch = document.querySelector('.menu__buscador-input');

const searchProduct = () => {

    if(inputSearch.value){
        window.location.href = `buscador.html?search=${inputSearch.value}`;
    }
}

searchButton.addEventListener('click', searchProduct);
inputSearch.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        searchProduct();
    }
});