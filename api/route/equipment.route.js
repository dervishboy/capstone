import express from 'express';
import {createEquipment, deleteEquipment, getAllEquipment, getEquipmentById, updateEquipment} from '../controller/equipment.controller.js';



const router = express.Router();

router.post('/', createEquipment);
router.get('/', getAllEquipment);
router.get('/:id', getEquipmentById);
router.put('/:id', updateEquipment);
router.delete('/:id', deleteEquipment);

export default router;
