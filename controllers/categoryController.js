const {getAllCategories, addCategory} = require('../models/categoryModel')

const fetchAllCategory = async (req, res) => {
  try {
    const countries = await getAllCategories();
    res.status(200).send(countries);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch countries' });
  }
};

const createCategory = async (req, res) => {
  const newCategory = req.body;
  if (!newCategory.color) {
    newCategory.color = "green";
  }
  try {
    const result = await addCategory(newCategory);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send({ error: "Failed to create category" });
  }
};

module.exports = {
  fetchAllCategory,
  createCategory
};
