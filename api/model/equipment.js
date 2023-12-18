import { DataTypes } from "sequelize";
// import Sequelize from "sequelize";
import db from "../../config/database.js";
import TargetMuscle from "./targetMuscle.js";

const Equipment = db.define('equipment', {
    equipmentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    equipmentImage: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    tutorial: {
        type: DataTypes.ARRAY(DataTypes.STRING),
    },
    videoTutorialLink: {
        type: DataTypes.STRING,
    },
});

Equipment.belongsToMany(TargetMuscle, { through: 'equipmentTargetMuscles', as : 'muscles' });
TargetMuscle.belongsToMany(Equipment, { through: 'equipmentTargetMuscles', as : 'equipment' });

export default Equipment;
