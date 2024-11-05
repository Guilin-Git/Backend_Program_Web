const sequelize = require('../config/db');
const { DataTypes } = require ('sequelize');


const User = sequelize.define('User', {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    tipo: {
        type: DataTypes.ENUM('entrada', 'saida', 'intervalo', 'volta intervalo'),
        allowNull: false

    },

    comentario: {
        type: DataTypes.STRING,
        allowNull: true

    },

    anexo: {
        type: DataTypes.STRING,
        allowNull: true

    },

    passado: {
        type: DataTypes.BOOLEAN,
        allowNull: false

    },

    dataHora: {
        type: DataTypes.DATE,
        allowNull: false

    },

    localizacao: {
        type: DataTypes.STRING,
        allowNull: true

    }


    },
    {
        timestamp: true
    }

);