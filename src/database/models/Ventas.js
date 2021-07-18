module.exports = function (sequelize, dataTypes) {

    let alias = "Venta";

    let cols = {
        id: {
            type : dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true, 
        },
        
        fecha: {
            type : dataTypes.DATE,
        },

        total: {
            type : dataTypes.DECIMAL(10,2),
        },

        id_usuario: {
            type : dataTypes.INTEGER,
        },
    };

    let config = {
        tablename: "venta",
        timestamps: false,
    };
    
    let Venta = sequelize.define(alias, cols, config);

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