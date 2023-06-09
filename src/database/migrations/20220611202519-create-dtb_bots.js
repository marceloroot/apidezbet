'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dtb_bots', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'usuarios', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      tipojogo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'dtb_tipojogo', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nome: {
          type: Sequelize.STRING(200),
          allowNull: false,
      },
      tipo_jogo: {
        type: Sequelize.STRING(200),
        allowNull: false,
    },
      bot_token: {
          type: Sequelize.STRING(500),
          allowNull: false,
      },
      iv_bot_token: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      chat_id: {
          type: Sequelize.STRING(500),
      },
      chat_id_free: {
        type: Sequelize.STRING(500),
     },
      iv_chat_id: {
        type: Sequelize.STRING(500),
      },
      iv_chat_id_free: {
        type: Sequelize.STRING(500),
      },
      status: {
        type: Sequelize.STRING(200),
        defaultValue: "I", //A - ativo // I- inativo
      },
      win: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      loss: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      free: {
        type: Sequelize.STRING(200),
        defaultValue: "0",
      },
      total_premium: {
        type: Sequelize.INTEGER,
        defaultValue:0,
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
    await queryInterface.dropTable('dtb_bots');
  }
};
