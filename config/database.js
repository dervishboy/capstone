import { Sequelize } from "sequelize";

const db = new Sequelize("capstone", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});

export default db;
