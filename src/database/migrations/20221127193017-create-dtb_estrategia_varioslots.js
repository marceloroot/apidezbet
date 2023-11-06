'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dtb_estrategia_varioslots', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      bot_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'dtb_tipojogo', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

    espera: {
        type: Sequelize.INTEGER,
        allowNull: false,
     },

      minimo: {
          type: Sequelize.INTEGER,
      },
      maximo: {
          type: Sequelize.INTEGER,
      },
      listajogs: {
        type: Sequelize.TEXT,
    },
     
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now')
      }, 
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now')
      }, 
      

   });
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dtb_estrategia_varioslots');
  }
};
