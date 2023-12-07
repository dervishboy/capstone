import Equipment from "../model/equipment.js";

export const createEquipment = async (req, res) => {
    const { equipmentImage, name, description, tutorial, videoTutorialLink, targetMuscles } = req.body;

    try {
        const newEquipment = await Equipment.create({
            equipmentImage: equipmentImage,
            name: name,
            description: description,
            tutorial: tutorial,
            videoTutorialLink: videoTutorialLink,
            targetMuscles: targetMuscles,
        });

        res.json(newEquipment);
    } catch (error) {
        console.error(error);

        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}

export const getAllEquipment = async (req, res) => {
    try {
        const equipment = await Equipment.findAll();
        res.json(equipment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getEquipmentById = async (req, res) => {
    const equipmentId = req.params.id;

    try {
        const equipment = await Equipment.findByPk(equipmentId);

        if (!equipment) {
            return res.status(404).json({ message: 'Equipment not found' });
        }

        res.json(equipment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updateEquipment = async (req, res) => {
    const equipmentId = req.params.id;
    const { equipmentImage, name, description, tutorial, videoTutorialLink, targetMuscles } = req.body;

    try {
        const existingEquipment = await Equipment.findByPk(equipmentId);

        if (!existingEquipment) {
            return res.status(404).json({ message: 'Equipment not found' });
        }

        await existingEquipment.update( 
            {
            equipmentImage,
            name,
            description,
            tutorial,
            videoTutorialLink,
            targetMuscles,
        });

        res.json(existingEquipment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteEquipment = async (req, res) => {
    const equipmentId = req.params.id;

    try {
        const existingEquipment = await Equipment.findByPk(equipmentId);

        if (!existingEquipment) {
            return res.status(404).json({ message: 'Equipment not found' });
        }

        await existingEquipment.destroy();

        res.json({
            message : "Delete Success",
        }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};