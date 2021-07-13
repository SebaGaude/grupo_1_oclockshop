module.exports = function (sequelize, dataTypes) {

    let alias = "Venta";

    let cols = {
        id: {
            type = dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        
        fecha: {

        },

        total: {

        },

        id_usuario: {

        },
    };

    let config = {
        tablename: "ventas",
        timestamps: false,
    };
    
    let Venta = define.sequelize(alias, cols, config);

    Venta.associate = function(modelos) {
        Venta.hasMany(modelos.Usuario, {
            as: "usuarios",
            foreignKey: "id_usuario_idx"
        })
        Venta.belongsToMany(modelos.Producto, {
            as: "productos",
            through: "detalle_venta",
            foreignKey: "id_producto",
            otherKey: "id_venta", 
            timestamps: false,
        });
    }
    return Venta; 
}