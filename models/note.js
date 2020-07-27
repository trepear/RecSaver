module.exports = function(sequelize, DataTypes) {
var Note = sequelize.define("Note", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    body: {
        type: DataTypes.STRING
    }
})
Note.associate = function(models) {
    Note.belongsTo(models.movieList, {
        foreignKey: {
           allowNull: false             
        }
    });
}
return Note;
}
