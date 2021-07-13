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

    return Venta; 
};