import { DataTypes } from "sequelize";
// import Sequelize from "sequelize";
import db from "../config/database.js";

const Equipment = db.define('equipment', {
    equipmentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    tutorial: {
        type: DataTypes.TEXT,
    },
    videoTutorialLink: {
        type: DataTypes.STRING,
    },
    targetMuscles: {
        type: DataTypes.STRING,
    },
});

export default Equipment;
