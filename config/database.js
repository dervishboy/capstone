import { Sequelize } from "sequelize";

const db = new Sequelize('capstone', 'postgres', 'justkidd1234', {
    host : 'localhost',
    dialect : 'postgres'
})

export default db;