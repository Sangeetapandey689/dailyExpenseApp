const models = require('../models/expenseModels'); // Replace 'yourModel' with your model file name

// Controller functions for CRUD operations
const createRecord = async (req, res) => {
  try {
    // Extract data from the request body
    const { field1, field2, field3 } = req.body;

    // Create a new record in your model
    const newRecord = await YourModel.create({ field1, field2, field3 });

    // Respond with the newly created record
    res.status(201).json(newRecord);
  } catch (error) {
    console.error('Error creating record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllRecords = async (req, res) => {
  try {
    // Fetch all records from your model
    const records = await YourModel.findAll();

    // Respond with the records
    res.status(200).json(records);
  } catch (error) {
    console.error('Error fetching records:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getRecordById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find a record by ID in your model
    const record = await YourModel.findByPk(id);

    if (record) {
      // Respond with the found record
      res.status(200).json(record);
    } else {
      res.status(404).json({ error: 'Record not found' });
    }
  } catch (error) {
    console.error('Error fetching record by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const { field1, field2, field3 } = req.body;

    // Find the existing record by ID
    const existingRecord = await YourModel.findByPk(id);

    if (existingRecord) {
      // Update the fields of the existing record
      existingRecord.field1 = field1;
      existingRecord.field2 = field2;
      existingRecord.field3 = field3;

      // Save the updated record
      await existingRecord.save();

      // Respond with the updated record
      res.status(200).json(existingRecord);
    } else {
      res.status(404).json({ error: 'Record not found' });
    }
  } catch (error) {
    console.error('Error updating record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteRecord = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the record by ID
    const record = await YourModel.findByPk(id);

    if (record) {
      // Delete the record
      await record.destroy();

      // Respond with a 204 No Content status
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Record not found' });
    }
  } catch (error) {
    console.error('Error deleting record:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createRecord,
  getAllRecords,
  getRecordById,
  updateRecord,
  deleteRecord,
};
