import { clientService } from "../service/client-service.js";

const form = document.querySelector('.add__producto-form');

const createProduct = async (e) => {

    e.preventDefault();

    const id = uuid.v4();
    const nombre = document.querySelector('#add-nombre').value;
    const categoria = document.querySelector('#add-categoria').value;
    const url = document.querySelector('#add-url').value;
    const precio = document.querySelector('#add-precio').value;
    const descripcion = document.querySelector('#add-descripcion').value;
    const jsonProduct = JSON.stringify({id, nombre, categoria, url, precio, descripcion});
    
    try {
        await clientService.crearProducto(jsonProduct);
        window.location.href = './dashboard-admin.html'
    } catch (error) {
        console.log(error)
    }
}

form.addEventListener('submit', createProduct);