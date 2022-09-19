import { clientService } from "../service/client-service.js";

const categoryNames = ['Replicas', 'Cómics', 'Merch']

const renderProducts = async () => {

    try {
        const dataProducts = await clientService.verProductos();
        filterProducts(dataProducts);
    } catch (error) {
        console.log(error);
    }
};

const filterProducts = (dataProducts) => {

    categoryNames.forEach((category, index) => {
        const categoryProducts = dataProducts.filter(product => product.category == category);

        if (categoryProducts.length > 0) {
            const main = document.querySelector(`main`);
            const section = main.children[index];
            writeTitle(section, category);
            showProducts(categoryProducts, section, index)
        } else {
            console.log(`"${category}" no hay productos`)
        }
    })
};

const writeTitle = (section, categoryName) => {
    const title = section.querySelector('.productos__titulo');
    title.textContent = categoryName;
}

const showProducts = (arrProducts, section, index) => {
    const categorySlider = section.querySelector('.productos__cards');
    categorySlider.innerHTML = '';
    arrProducts.forEach(product => {
        const card = createCard(product);
        categorySlider.appendChild(card);
    });

};

const createCard = (product) => {
    const card = document.createElement('div');
    card.classList.add('producto__card');
    card.innerHTML = createContentCard(product)
    card.setAttribute("draggable", "false");
    return card
}

const createContentCard = ({ nombre, categoria, url, precio, id }) => {
    return `<img class="producto__img" src="${url}" alt="Producto">
    <div class="producto__texto">
    <p class="producto__categoria">${categoria}</p>
        <h4 class="producto__nombre">${nombre}</h4>
        <p class="producto__precio">${precio}</p>
        <a class="producto__detalles" href="./detail-product.html?=${id}">Ver <i
                class="fa-solid fa-arrow-right-to-bracket"></i></a>
    </div>`;

};

renderProducts();

const seeMoreLinks = document.querySelectorAll('.productos__todos');
seeMoreLinks.forEach(seeMoreLink => {
    seeMoreLink.addEventListener('click', (e) => {
        const category = e.path[2].children[0].textContent;
        console.log(category)
        window.location.href = `./buscador.html?search=${category}`
    });
});