import { Sequelize } from "sequelize";

const db = new Sequelize('capstone', 'postgres', '123', {
    host : 'localhost',
    dialect : 'postgres'
})

export default db;