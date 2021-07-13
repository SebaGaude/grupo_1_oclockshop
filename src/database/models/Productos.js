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

    Producto.associate = function(modelos) {
        Producto.hasMany(modelos.Categoria, {
            as: "categorias",
            foreignKey: "id_categoria"
        })
        Producto.hasMany(modelos.Marca, {
            as: "marcas",
            foreignKey: "id_marca"
        });
        Producto.belongsToMany(modelos.Venta, {
            as: "ventas",
            through: "detalle_venta",
            foreignKey: "id_venta",
            otherKey: "id_producto", 
            timestamps: false,
        });
    }

    return Producto;
}