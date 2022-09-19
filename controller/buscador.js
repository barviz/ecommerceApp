import { clientService } from "../service/client-service.js";

const url = new URL(window.location);
const search = url.searchParams.get('buscador');

const title = document.querySelector('.admin__titulo');
const productsBox = document.querySelector('.productos__cards-stock');

title.textContent = `"${search}"`;

const getProducts = async (search) => {

    try {
        const arrProducts = await clientService.verProductos();
        productsBox.innerHTML = '';
        findProducts(arrProducts, search);
    } catch (error) {
        console.log(error);
    }
}

const findProducts = (arrProducts, search) => {

    let coincidence = 0 ;
    
    arrProducts.forEach(product => {
        const name = product.name.toLowerCase();
        const category = product.category.toLowerCase();
        const regex = search.toLowerCase(); 
        if(name.includes(regex) || category.includes(regex)){
            showProduct(product);
            coincidence++;
        }
    })
    if(coincidence == 0){
        noCoincidence();
    }
}

const showProduct = (product) => {
    const card = createCard(product);
    productsBox.appendChild(card);
};

const createCard = (product) => {
    const card = document.createElement('div');
    card.classList.add('producto__card');
    card.innerHTML = createContentCard(product);
    return card
}

const createContentCard = ({nombre, categoria, url, precio, id}) => {
    
    return `<img class="producto__img" src="${url}" alt="Producto">
    <div class="producto__texto">
    <p class="producto__categoria">${categoria}</p>
        <h4 class="producto__nombre">${nombre}</h4>
        <p class="producto__precio">${precio}</p>
        <a class="producto__detalles" href="./detail-product.html?=${id}">Ver <i
                class="fa-solid fa-arrow-right-to-bracket"></i></a>
    </div>`;
};

const noCoincidence = () => {
    productsBox.innerHTML = `<div class="sin-coincidencia">
                                <p>No se encontró ningún resultado que coincida con la búsqueda.</p>
                             </div>`;
}

getProducts(search);