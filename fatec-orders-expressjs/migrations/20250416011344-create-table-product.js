'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produto', {
      id_produto: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      id_marca: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'marca',
          key: 'id_marca'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      cod_barras: {
        type: DataTypes.STRING(128),
        allowNull: false
      },
      id_fornecedor: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_estoque: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      preco: {
        type: DataTypes.FLOAT(14, 2),
        allowNull: false
      },
      peso: {
        type: DataTypes.FLOAT(14, 2),
        allowNull: false
      },
      unidade_medida: {
        type: DataTypes.STRING(10),
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('produto');
  }
};
