import data from '../data.json';


export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {

        const item = data.find((prod) => prod.id === id);

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "No se encontró el producto"
            })
        }

    })
}