import express from 'express';
import { Sequelize } from 'sequelize';
import cors from 'cors';
import {db} from "./db.js";
import userRoutes from './routes/user-api.js';
import loginRoutes from './routes/login-api.js';
import postRoutes from './routes/post-api.js';
import commentRoutes from './routes/comment-api.js';
import likeRoutes from './routes/like-api.js';

const app = express();
const PORT = process.env.PORT || 3000;


const corsOptions = {
    origin: /localhost:\d{4,5}$/i,
    allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    maxAge: 1000 * 60 * 60 * 12
}

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});


sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.error('Unable to connect to the database:', err));

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', loginRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);
app.use('/api', likeRoutes);


app.get('/', (req, res) => {
    res.send('Blog site api');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});