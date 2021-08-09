module.exports = function (sequelize, dataTypes) {

    let alias = "Usuario";

    let cols = {
        id: {
            type : dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        
        nombre: {
            type : dataTypes.STRING(255),
            allowNull: false
        },

        apellido: {
            type : dataTypes.STRING(255),
            allowNull: false
        }, 

        email: {
            type : dataTypes.STRING(255),
            allowNull: false,
            unique: true
        },

        imagen: {
            type : dataTypes.STRING(255)
        }, 

        contraseña: {
            type : dataTypes.STRING(255),
            allowNull: false
        },
   
        perfil: {
            type : dataTypes.STRING(255)
        }, 
   
   
    };

    let config = {
        tableName: "usuario",
        timestamps: false,
    };

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(modelos) {
        Usuario.hasMany(modelos.Venta, {
            as: "Ventas",
            foreignKey: "id_usuario"
        })
    }
    
    return Usuario; 
};