import {Model as Match, Sequelize} from "sequelize";
import UserModel from "./models/user.js";
import CommentModel from "./models/comment.js";
import PostModel from "./models/post.js";
import LikeModel from "./models/like.js";

export const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
});

export const User = UserModel(db);
export const Comment = CommentModel(db);
export const Post = PostModel(db);
export const Like = LikeModel(db);

// Post }o--|| User
Post.belongsTo(User, {foreignKey: 'userId'});
User.hasMany(Post, {foreignKey: 'userId'});

// Comment }o--|| User
Comment.belongsTo(User, {foreignKey: 'userId'});
User.hasMany(Comment, {foreignKey: 'userId'});

// Comment }o--|| Post
Comment.belongsTo(Post, {foreignKey: 'postId'});
Post.hasMany(Comment, {foreignKey: 'postId'});

// like }o--|| Post
Like.belongsTo(Post, {foreignKey: 'postId'});
Post.hasMany(Like, {foreignKey: 'postId'});

// like }o--|| User
Like.belongsTo(User, {foreignKey: 'userId'});
User.hasMany(Like, {foreignKey: 'userId'});