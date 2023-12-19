import express from "express";
import {
  createEquipment,
  deleteEquipment,
  getAllEquipment,
  getEquipmentById,
  updateEquipment,
  searchEquipment,
  getAllTargetMuscles,
} from "../controller/equipment.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome!");
});

router.get("/search", searchEquipment);
router.post("/equipment", createEquipment);
router.get("/equipment", getAllEquipment);
router.get("/equipment/:id", getEquipmentById);
router.put("/equipment/:id", updateEquipment);
router.delete("/equipment/:id", deleteEquipment);
router.get("/muscles", getAllTargetMuscles);

export default router;
