const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Import your model and controller
const Models = require('./models/expenseModels'); // Replace 'YourModel' with your model file name
const controller = require('./controllers/expenseController'); // Replace 'controller' with your controller module name

app.use(cors());
app.use(bodyParser.json());

// Create a new record
app.post('/api/records', controller.createRecord);

// Get all records
app.get('/api/records', controller.getAllRecords);

// Get a record by ID
app.get('/api/records/:id', controller.getRecordById);

// Update a record by ID
app.put('/api/records/:id', controller.updateRecord);

// Delete a record by ID
app.delete('/api/records/:id', controller.deleteRecord);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
