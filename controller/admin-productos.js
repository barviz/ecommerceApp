import { clientService } from "../service/client-service.js"; 

const productsBox = document.querySelector('.productos__cards-stock')

const renderProducts = async () => {

    try {
        const dataProducts = await clientService.verProductos();
        showProducts(dataProducts);
    } catch (error) {
        console.log(error);
    }
};

const showProducts = (arrProducts) => {

    if(arrProducts.length > 0) {
        productsBox.innerHTML = '';
        arrProducts.forEach(product => {
            const card = createCard(product);
            productsBox.appendChild(card);
            const buttonDelete = document.getElementById(product.id);
            buttonDelete.addEventListener('click', deleteProduct);
        });
    } else {
        console.log("no hay productos");
    }
};

const createCard = (product) => {
    const card = document.createElement('div');
    card.classList.add('producto__card');
    card.innerHTML = createContentCard(product);
    return card
}

const createContentCard = ({ nombre, categoria, url, precio, id }) => {
    return `<img class="producto__img" src="${url}" alt="Producto">
    <div class="producto__texto">
    <p class="producto__categoria">${categoria}</p>
        <h4 class="producto__nombre">${nombre}</h4>
        <p class="producto__precio">${precio}</p>
        <div class="producto__acciones-box">
                            <a class="producto__accion-editar" href="./editar-producto.html?=${id}"><i class="fa-solid fa-pen-to-square"></i></a>
                            <button class="producto__accion-eliminar"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
    </div>`;

};

const deleteProduct = (e) => {
    
    console.log(e)
    console.log(e.currentTarget.parentNode.parentNode.parentNode)
    const id = e.currentTarget.id;
    const card = e.currentTarget.parentNode.parentNode.parentNode;
    clientService.eliminarProducto(id);
    card.remove();
    
}

renderProducts();