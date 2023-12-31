import Equipment from "../model/equipment.js";
import targetMuscle from "../model/targetMuscle.js";
import { Op } from "sequelize";

export const createEquipment = async (req, res) => {
  const {
    equipmentImage,
    name,
    description,
    tutorial,
    videoTutorialLink,
    targetMuscles,
  } = req.body;

  try {
    const newEquipment = await Equipment.create({
      equipmentImage: equipmentImage,
      name: name,
      description: description,
      tutorial: tutorial,
      videoTutorialLink: videoTutorialLink,
    });

    if (targetMuscles && targetMuscles.length > 0) {
      const muscles = await targetMuscle.findAll({
        where: {
          targetMuscleName: {
            [Op.in]: targetMuscles,
          },
        },
      });

      await newEquipment.setMuscles(muscles);
    }

    res.json(newEquipment);
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

export const getAllEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findAll({
      include: {
        model: targetMuscle,
        as: "muscles",
      },
    });
    res.json(equipment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getEquipmentById = async (req, res) => {
  const equipmentId = req.params.id;

  if (isNaN(parseInt(equipmentId, 10))) {
    return res.status(400).json({ error: "Invalid equipment ID" });
  }

  try {
    const equipment = await Equipment.findByPk(equipmentId, {
      include: {
        model: targetMuscle,
        as: "muscles",
      },
    });

    if (!equipment) {
      return res.status(404).json({ message: "Equipment not found" });
    }

    res.json(equipment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateEquipment = async (req, res) => {
  const equipmentId = req.params.id;
  const {
    equipmentImage,
    name,
    description,
    tutorial,
    videoTutorialLink,
    targetMuscles,
  } = req.body;

  try {
    const existingEquipment = await Equipment.findByPk(equipmentId);

    if (!existingEquipment) {
      return res.status(404).json({ message: "Equipment not found" });
    }

    await existingEquipment.update({
      equipmentImage,
      name,
      description,
      tutorial,
      videoTutorialLink,
    });

    if (targetMuscles && targetMuscles.length > 0) {
      const muscles = await targetMuscle.findAll({
        where: { name: targetMuscles },
      });

      await existingEquipment.setTargetMuscles(muscles);
    } else {
      await existingEquipment.setTargetMuscles([]);
    }

    res.json(existingEquipment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteEquipment = async (req, res) => {
  const equipmentId = req.params.id;

  try {
    const existingEquipment = await Equipment.findByPk(equipmentId);

    if (!existingEquipment) {
      return res.status(404).json({ message: "Equipment not found" });
    }

    await existingEquipment.destroy();

    res.json({
      message: "Delete Success",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const searchEquipment = async (req, res) => {
  const { q, muscleTypes, sort } = req.query;

  try {
    let query = {};

    if (q) {
      query.name = { [Op.iLike]: `%${q}%` };
    }

    let order = [];

    if (sort === "asc") {
      order.push(["name", "ASC"]);
    } else if (sort === "desc") {
      order.push(["name", "DESC"]);
    }

    if (muscleTypes) {
      const muscleNames = muscleTypes.split(",");
      query["$muscles.targetMuscleName$"] = {
        [Op.iLike]: { [Op.any]: muscleNames.map((name) => `%${name}%`) },
      };
    }

    const equipment = await Equipment.findAll({
      where: query,
      order: order,
      include: { model: targetMuscle, as: "muscles" },
    });

    res.json(equipment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllTargetMuscles = async (req, res) => {
  try {
    const muscles = await targetMuscle.findAll();
    res.json(muscles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
