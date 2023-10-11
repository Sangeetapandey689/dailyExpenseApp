const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Expense = sequelize.define('Expense', {
  amount: {
    type: DataTypes.DECIMAL(10, 2), // Adjust the data type based on your needs
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  item: { // Renamed 'iteam' to 'item'
    type: DataTypes.TEXT,
    allowNull: false,
  },
  addexpense: {
    type: DataTypes.INTEGER, // Assuming this is a foreign key to another table
    allowNull: false,
  },
});

sequelize.sync()
  .then(() => {
    console.log('Database and tables synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

module.exports = Expense;
