module.exports = (sequelize, DataTypes) => {
    const Auction = sequelize.define("Auction", {
      AuctionID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      StartTime: { type: DataTypes.DATE, allowNull: false },
      EndTime: { type: DataTypes.DATE, allowNull: false },
      CurrentHighestBid: { type: DataTypes.FLOAT, defaultValue: 0 },
      AuctionStatus: { type: DataTypes.ENUM("Active", "Completed"), defaultValue: "Active" },
    });
    Auction.associate = (models) => {
      Auction.belongsTo(models.Property, { foreignKey: "PropertyID" });
      Auction.belongsTo(models.User, { foreignKey: "WinnerID", as: "Winner" });
    };
    return Auction;
  };
  