const { client } = require('../config/db');

const categoryCollection = client.db("animalDB").collection("category");

const getAllCategories = async () => {
  const cursor = categoryCollection.find();
  return await cursor.toArray();
};

const addCategory = async (category) => {
  return await categoryCollection.insertOne(category);
};

module.exports = {
  getAllCategories,
  addCategory
};

