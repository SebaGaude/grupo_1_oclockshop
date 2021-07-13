module.exports = function (sequelize, dataTypes) {

    let alias = "Usuario";

    let cols = {
        id: {
            type = dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        
        nombre: {

        },

        apellido: {

        }, 

        email: {

        },

        imagen: {

        }, 

        contrasenia: {

        }
    };

    let config = {
        tablename: "usuarios",
        timestamps: false,
    };

    let Usuario = define.sequelize(alias, cols, config);

    Usuario.associate = function(modelos) {
        Usuario.belongsTo(modelos.Venta, {
            as: "ventas",
            foreignKey: "id_usuario_idx"
        })
    }
    
    return Usuario; 
};