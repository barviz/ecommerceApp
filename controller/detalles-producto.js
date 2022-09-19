import { clientService } from "../service/client-service.js";

const url = new URL(window.location);
const id = url.searchParams.get('id')

const getProduct = async (id) => {
    try {
        const arrProduct = await clientService.verProducto(id);
        createCard(arrProduct)

    } catch (error) {
        console.log(error)
    }
}

const createCard = ({nombre, categoria, url, precio, detalle}) => {

    const imgTag = document.querySelector('.producto__detalle-container img');
    const categoryTag = document.querySelector('.producto__detalle-categoria');
    const nameTag = document.querySelector('.producto__detalle-nombre');
    const priceTag = document.querySelector('.producto__detalle-precio');
    const descriptionTag = document.querySelector('.producto__detalle-detalle');
    
    imgTag.src = url;
    categoryTag.textContent = `Categoría: ${categoria}`;
    nameTag.textContent = nombre;
    priceTag.textContent = `$ ${precio}`;
    descriptionTag.textContent = detalle;
}

getProduct(id);