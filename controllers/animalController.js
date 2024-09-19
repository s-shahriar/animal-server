const {
  getAllAnimals,
  getAnimalById,
  addAnimal,
} = require("../models/animalModel");
const ObjectId = require("mongodb").ObjectId;

const fetchAllAnimals = async (req, res) => {
  try {
    const animals = await getAllAnimals();
    console.log(animals);
    res.status(200).send(animals);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch animals" });
  }
};

const fetchAnimalById = async (req, res) => {
  const id = req.params.id;
  try {
    const animal = await getAnimalById(new ObjectId(id));
    if (!animal) {
      return res.status(404).send({ error: "Animal not found" });
    }
    res.status(200).send(animal);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch animal" });
  }
};

const createAnimal = async (req, res) => {
  const newAnimal = req.body;
  if (!newAnimal.imageUrl) {
    newAnimal.imageUrl =
      "https://i.ibb.co.com/DKW00x2/images-q-tbn-ANd9-Gc-R-w37k-M40-Nbda-SQ9-FVehjd-U8h-U32he-AAo-Ab-CNxg-Hgv-Sq-Hha-Fm-Lo-UVgzq1-Iq-G2.jpg";
  }
  try {
    const result = await addAnimal(newAnimal);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send({ error: "Failed to create animal" });
  }
};

module.exports = {
  fetchAllAnimals,
  fetchAnimalById,
  createAnimal,
};
