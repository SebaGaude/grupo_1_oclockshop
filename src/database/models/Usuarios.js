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

        contrasenia: {
            type : dataTypes.STRING(255),
            allowNull: false
        }
    };

    let config = {
        tablename: "usuario",
        timestamps: false,
    };

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(modelos) {
        Usuario.belongsTo(modelos.Venta, {
            as: "ventas",
            foreignKey: "id_usuario_idx"
        })
    }
    
    return Usuario; 
};