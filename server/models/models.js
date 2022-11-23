const sequelize = require("../db")
const { DataTypes } = require("sequelize")
const UserModel = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false
    }
    ,
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
    ,
    isActivated: {
        type: DataTypes.STRING,
        allowNull: false
    },
    activationLink: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
const TokenModel = sequelize.define("tokens", {
    refreshToken: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    }
})

const TrackModel = sequelize.define("tracks", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duration: {
        type: DataTypes.TIME,
        allowNull: false
    }
})
const LikedModel = sequelize.define("likedtracks", {

})
const ArtistModel = sequelize.define("artists", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
const GenreModel = sequelize.define("genres", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
const AlbumModel = sequelize.define("albums", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
UserModel.hasOne(TokenModel, {
    foreignKey: "id_user",
    sourceKey: "id"
});
TokenModel.belongsTo(UserModel, {
    foreignKey: "id_user",
    targetKey: "id"
});


ArtistModel.hasMany(TrackModel, {
    foreignKey: "id"
})
TrackModel.belongsTo(ArtistModel)

TrackModel.hasMany(LikedModel)
LikedModel.belongsTo(TrackModel)

UserModel.hasMany(LikedModel)
LikedModel.belongsTo(UserModel)



TrackModel.belongsToMany(GenreModel, { through: "genrelist" })
GenreModel.belongsToMany(TrackModel, { through: "genrelist" })

AlbumModel.belongsToMany(TrackModel, { through: "albumtrack" })
TrackModel.belongsToMany(AlbumModel, { through: "albumtrack" })

module.exports = { UserModel, TokenModel, AlbumModel, ArtistModel, TrackModel, GenreModel, LikedModel }