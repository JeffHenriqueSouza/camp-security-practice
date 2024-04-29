const User = require('../models/User');

module.exports = {
  up: async () => {
    // Adiciona 10 usuários de exemplo
    try {
      for (let i = 0; i < 10; i++) {
        await User.create({ username: `user${i}`, password: `password${i}` });
      }
      console.log('Usuários de exemplo criados com sucesso.');
    } catch (error) {
      console.error('Erro ao criar usuários de exemplo:', error);
    }
  },
  down: async () => {
    // Remove todos os usuários adicionados
    try {
      await User.destroy({ truncate: true });
      console.log('Usuários de exemplo removidos com sucesso.');
    } catch (error) {
      console.error('Erro ao remover usuários de exemplo:', error);
    }
  },
};
