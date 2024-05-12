const csv = require('csvtojson');

module.exports = {
  up: async queryInterface => {
    const csvFilePath = './database/seeders/csv/productos.csv';
    let array = await csv().fromFile(csvFilePath);
    array = array.map(x => {
      Object.entries(x).forEach(([key, value]) => {
        if (!isNaN(value)) {
          x[key] = Number(value);
        }
        if (value === 'NULL' || value === '') {
          x[key] = null;
        }
      });
      return x;
    });
    return queryInterface.bulkInsert('products', array, {});
  },
  down: queryInterface => queryInterface.bulkDelete('products', null, {}),
};
