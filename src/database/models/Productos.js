module.exports = function (sequelize, datatypes) {
    let alias = 'Producto';

    let cols = {
        id: {

        }, 

        articulo: {

        },

        descripcion: {

        }, 

        id_categoria: {

        }, 

        id_marca: {

        },

        stock: {

        }, 

        precio: {
            
        }
    };
    
    let config = {

    };

    let Producto = sequelize.define(alias, cols, config);


    return Producto;
}