const { DataTypes } = require('sequelize');

const Attributes = {
  userId: {
    type: DataTypes.INTEGER,
    field: 'user_id',
  },
  sellerId: {
    type: DataTypes.INTEGER,
    field: 'seller_id',
  },
  totalPrice: { type: DataTypes.DECIMAL(9, 2), field: 'total_price' },
  deliveryAddress: { type: DataTypes.STRING, field: 'delivery_address' },
  deliveryNumber: { type: DataTypes.STRING, field: 'delivery_number' },
  saleDate: { type: DataTypes.DATE, field: 'sale_date', defaultValue: DataTypes.NOW },
  status: DataTypes.STRING,
};

module.exports = (sequelize) => {
  const Sales = sequelize.define(
    "Sales",
    Attributes,
    { tableName: 'sales', timestamps: false, underscored: true },
  );

  Sales.associate = (models) => {
    Sales.belongsTo(
      models.Users,
      { foreignKey: 'userId', otherKey: 'id', as: 'customer', through: Sales, exclude: ['password'] },
    );
  };

  Sales.associate = (models) => {
    Sales.belongsTo(
      models.Users,
      { foreignKey: 'sellerId', otherKey: 'id', as: 'seller', through: Sales, exclude: ['password'] },
    );
  };

  return Sales;
};
