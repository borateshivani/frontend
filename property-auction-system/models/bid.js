module.exports = (sequelize, DataTypes) => {
    const Bid = sequelize.define("Bid", {
      BidID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      BidAmount: { type: DataTypes.FLOAT, allowNull: false },
      BidTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    });
    Bid.associate = (models) => {
      Bid.belongsTo(models.Auction, { foreignKey: "AuctionID" });
      Bid.belongsTo(models.User, { foreignKey: "UserID" });
    };
    return Bid;
  };
  