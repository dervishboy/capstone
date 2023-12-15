import db from "../../config/database.js";
import { DataTypes } from "sequelize";

const targetMuscles = db.define("targetMuscles", {
    targetMuscleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    targetMuscleName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    });

export default targetMuscles;