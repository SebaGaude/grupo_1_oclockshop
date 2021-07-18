module.exports = function (sequelize, dataTypes) {

    let alias = "Marca";

    let cols = {
        id: {
            type : dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        
        nombre: {
            type: dataTypes.STRING(255),
        },

        descripcion: {
            type: dataTypes.TEXT(10000),
        },
    };

    let config = {
        tablename: "marca",
        timestamps: false,
    };
    
    let Marca = sequelize.define (alias, cols, config);

    Marca.associate = function(modelos) {
        Marca.hasMany(modelos.Producto, {
            as: "Productos",
            foreignKey: "id_marca"
        })
    }

    return Marca; 
};