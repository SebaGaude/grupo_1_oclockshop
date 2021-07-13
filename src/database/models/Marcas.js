module.exports = function (sequelize, dataTypes) {

    let alias = "Marca";

    let cols = {
        id: {
            type = dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        
        nombre: {

        },

        descripcion: {

        },
    };

    let config = {
        tablename: "marcas",
        timestamps: false,
    };
    
    let Marca = define.sequelize(alias, cols, config);

    Marca.associate = function(modelos) {
        Marca.belongsTo(modelos.Producto, {
            as: "marcas",
            foreignKey: "id_marca"
        })
    }

    return Marca; 
};