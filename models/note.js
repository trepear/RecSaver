module.exports = function(sequelize, DataTypes) {
var Note = sequelize.define("Note", {
    body: {
        type: Datatypes.STRING
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

// Author.associate = function(models) {
//     // Associating Author with Posts
//     // When an Author is deleted, also delete any associated Posts
//     Author.hasMany(models.Post, {
//       onDelete: "cascade"
//     });
//   };

//   return Author;