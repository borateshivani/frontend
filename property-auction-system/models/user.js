module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      UserID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      Name: { type: DataTypes.STRING, allowNull: false },
      Email: { type: DataTypes.STRING, unique: true, allowNull: false },
      Password: { type: DataTypes.STRING, allowNull: false },
      PhoneNumber: { type: DataTypes.STRING },
      UserType: { type: DataTypes.ENUM("Buyer", "Seller", "Admin"), allowNull: false },
      PremiumMember: { type: DataTypes.BOOLEAN, defaultValue: false },
    });
    return User;
  };
  