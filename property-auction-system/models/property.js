module.exports = (sequelize, DataTypes) => {
    const Property = sequelize.define("Property", {
      PropertyID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      Title: { type: DataTypes.STRING, allowNull: false },
      Description: { type: DataTypes.TEXT },
      Location: { type: DataTypes.STRING },
      Image: { type: DataTypes.STRING },
      BasePrice: { type: DataTypes.FLOAT, allowNull: false },
      AuctionStatus: { type: DataTypes.ENUM("Pending", "Active", "Closed"), defaultValue: "Pending" },
    });
    Property.associate = (models) => {
      Property.belongsTo(models.User, { foreignKey: "SellerID", as: "Seller" });
    };
    return Property;
  };
  