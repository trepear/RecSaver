// This sends the movieId to the notes section
module.exports = function(sequelize, DataTypes) {
  var movieList = sequelize.define("movieList", {
    watched: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    imdbID: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  })
  movieList.associate = function(models) {
    movieList.hasMany(models.Note, {
      oneDelete: "cascade"
    });
}
  return movieList;
};

