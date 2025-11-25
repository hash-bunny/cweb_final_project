const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const PORT = process.env.PORT || 3000;


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});


sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.error('Unable to connect to the database:', err));


app.get('/', (req, res) => {
    res.send('Hello World from Node API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});