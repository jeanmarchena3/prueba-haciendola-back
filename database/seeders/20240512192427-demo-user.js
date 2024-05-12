module.exports = {
  up: queryInterface => queryInterface.bulkInsert('users', [{
    id: 1,
    username: 'jeanmarchena3',
    password: '$2a$10$Un9dlKv2OKsgrmjG1Dhg1.VtZZVYChliF7GmQAI5VNGvOTSUhWkBu', /* 11111111 */
    firstname: 'Jean',
    lastname: 'Akchar',
    email: 'jeanmarchena31@gmail.com',
  },
  ], {}),
  down: queryInterface => queryInterface.bulkDelete('users', null, {}),
};
