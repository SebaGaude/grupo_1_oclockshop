module.exports = function (sequelize, dataTypes) {
    let alias = 'Producto';

    let cols = {
        id: {
            type : dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, 

        articulo: {
            type: dataTypes.STRING(255)
        },

        descripcion: {
            type: dataTypes.STRING(255)
        }, 

        id_categoria: {
            type : dataTypes.INTEGER,
        }, 

        id_marca: {
            type : dataTypes.INTEGER,
        },

        stock: {
            type : dataTypes.INTEGER,
        }, 

        precio: {
            type : dataTypes.DECIMAL(10,2),
        }
    };
    
    let config = {

        tableName:'producto',
        timestamps: false

    };

    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(modelos) {
        Producto.belongsTo(modelos.Categoria, {
            as: "categorias",
            foreignKey: "id_categoria"
        })
        Producto.belongsTo(modelos.Marca, {
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