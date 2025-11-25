import {DataTypes} from "sequelize";

export default (db) => {
    return db.define('comment', {
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
        commentText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        commentDate: {
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