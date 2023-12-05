import express from 'express';
import {createEquipment, deleteEquipment, getAllEquipment, updateEquipment} from '../controller/equipment.controller.js';



const router = express.Router();

router.post('/', createEquipment);
router.get('/', getAllEquipment);
router.put('/:id', updateEquipment);
router.delete('/:id', deleteEquipment);

export default router;
