const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  sequelize.define(
    "Activity",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      difficulty: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },
      duration: {
        type: DataTypes.STRING,
      },
      season: {
        type: DataTypes.ENUM("Summer", "Winter", "Autumn", "Spring", "All year round"),
      },
    },
    { timestamps: false }
  );
};
