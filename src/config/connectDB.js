const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('tuananh-sama', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

let connectDB = async () => {// async la bat dong bo, bat buoc de dung cho await, day la ham bat dong bo
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
module.exports = connectDB;