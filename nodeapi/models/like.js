import {DataTypes} from "sequelize";

export default (db) => {
    return db.define('like', {
        postId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'comment',
                key: 'id'
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        likeAndUnlike: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    }, {timestamps: false});
}