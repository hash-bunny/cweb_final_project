import {DataTypes} from "sequelize";

export default (db) => {
    return db.define('post', {
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
        },
        postDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        edited: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

    }, {timestamps: false});
}