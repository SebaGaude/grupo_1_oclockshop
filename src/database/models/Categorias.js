module.exports = function (sequelize, dataTypes) {

    let alias = "Categoria";

    let cols = {
        id: {
            type : dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        
        nombre: {
            type: dataTypes.STRING(255),
            allowNull: false
        },

        descripcion: {
            type: dataTypes.TEXT(10000),
        },
    };

    let config = {
        tablename: "categoria",
        timestamps: false,
    };

    let Categoria = sequelize.define (alias, cols, config);
    
    Categoria.associate = function(modelos) {
        Categoria.hasMany(modelos.Producto, {
            as: "Productos",
            foreignKey: "id_categoria"
        })
    }
    
    return Categoria; 
};