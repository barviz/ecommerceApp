const crearProducto = async (jsonProduct) => {
    try {
        const response = await fetch(`http://localhost:3000/productos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonProduct
        });
        return response.json;
    } catch (error) {
        return console.log(error);
    }
}

const verProductos = () => fetch('http://localhost:3000/productos').then(response => response.json());

const verProducto = (id) => fetch(`http://localhost:3000/productos/${id}`).then(response => response.json());

const actualizarProducto = (id, jsonProduct) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonProduct
    })
    .then(response => response.json)
    .catch(error => console.log(error))
}

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: 'DELETE'
    });
};

export const clientService = {
    crearProducto,
    verProductos,
    verProducto,
    actualizarProducto,
    eliminarProducto,
};