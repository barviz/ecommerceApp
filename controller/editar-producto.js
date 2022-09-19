import { clientService } from "../service/client-service.js";

const url = new URL(window.location);
const id = url.searchParams.get('id')
const form = document.querySelector('.edit__producto-form');

const getProduct = async (id) => {
    try {
        const arrProduct = await clientService.verProducto(id);
        createCard(arrProduct)
    } catch (error) {
        console.log(error)
    }
}

const createCard = ({nombre, categoria, url, precio, descripcion}) => {

    const inputName = document.querySelector('#edit-nombre');
    const inputcategory = document.querySelector('#edit-categoria');
    const inputUrl = document.querySelector('#edit-url');
    const inputPrice = document.querySelector('#edit-precio');
    const inputDescription = document.querySelector('#edit-descripcion');

    inputName.value = nombre;
    inputcategory.value = categoria;
    inputUrl.value = url;
    inputPrice.value = precio;
    inputDescription.value = descripcion;
}

const editProduct = async (e) => {
    
    e.preventDefault();

    const nombre = document.querySelector('#edit-nombre').value;
    const categoria = document.querySelector('#edit-categoria').value;
    const url = document.querySelector('#edit-url').value;
    const precio = document.querySelector('#edit-precio').value;
    const descripcion = document.querySelector('#edit-descripcion').value;
    const jsonProduct = JSON.stringify({nombre, categoria, url, precio, descripcion});

    try {
        await clientService.actualizarProducto(id, jsonProduct);
        window.location.href = './dashboard-admin.html'
    } catch (error) {
        console.log(error)
    }
}

getProduct(id);
form.addEventListener('submit', editProduct);