import {DataTypes} from "sequelize";

export default (db) => {
    return db.define('user', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: {args: true, msg: "You must provide a username"},
                len: {args: [3, 20], msg: "Username must be between 3 and 20 characters long"},
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: {args: true, msg: "You must provide a valid email address"},
                isEmail: {args: true, msg: "You must provide a valid email address"},
            }
        },
        passHash: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profilePhoto: {
            type: DataTypes.STRING,
            allowNull: true
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {timestamps: false});
}