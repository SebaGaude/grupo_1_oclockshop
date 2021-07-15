module.exports = function (sequelize, dataTypes) {

    let alias = "Categoria";

    let cols = {
        id: {
            type = dataTypes.INTEGER,
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
        tablename: "categorias",
        timestamps: false,
    };

    let Categoria = define.sequelize(alias, cols, config);
    
    Categoria.associate = function(modelos) {
        Categoria.belongsTo(modelos.Producto, {
            as: "categorias",
            foreignKey: "id_categoria"
        })
    }
    
    return Categoria; 
};