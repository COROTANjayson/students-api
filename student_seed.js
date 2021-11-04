const seeder = require('mongoose-seed');
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })

const { DB } = require("./config");
// Connect to MongoDB via Mongoose
seeder.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreatendex: true, }, function () {

  // Load Mongoose models
  seeder.loadModels([
    'Student.js',
  ]);

  // Clear specified collections
  seeder.clearModels(['Student'], function () {

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      seeder.disconnect();
    });

  });
});

// Data array containing seed data - documents organized by Model
var data = [
  {
    'model': 'Student',
    'documents': [
      {
        'student_id': '2018500655',
        'school': 'University of Science and Technology of Southern Philippines',
        'course': 'BSCE',
        'phone_number': '09069529456',
      },
      {
        'student_id': '2018501656',
        'school': 'University of Science and Technology of Southern Philippines',
        'course': 'BSIT',
        'phone_number': '09953856593',
      },
      {
        'student_id': '2018501657',
        'school': 'University of Science and Technology of Southern Philippines',
        'course': 'BSTCM',
        'phone_number': '09069529678',
      },
      {
        'student_id': '2018501658',
        'school': 'University of Science and Technology of Southern Philippines',
        'course': 'BSCPE',
        'phone_number': '09069529635',
      },
      {
        'student_id': '2018501659',
        'school': 'University of Science and Technology of Southern Philippines',
        'course': 'BSIT',
        'phone_number': '09069529123',
      },
      {
        'student_id': '2018501660',
        'school': 'University of Science and Technology of Southern Philippines',
        'course': 'BSTCM',
        'phone_number': '09069529542',
      },
      {
        'student_id': '2018501661',
        'school': 'University of Science and Technology of Southern Philippines',
        'course': 'BSED',
        'phone_number': '09069529678',
      },
      {
        'student_id': '2018501662',
        'school': 'University of Science and Technology of Southern Philippines',
        'course': 'BSIT',
        'phone_number': '09069529845',
      },
      {
        'student_id': '2018501663',
        'school': 'University of Science and Technology of Southern Philippines',
        'course': 'BSCE',
        'phone_number': '09069529129',
      },
      {
        'student_id': '2018501664',
        'school': 'University of Science and Technology of Southern Philippines',
        'course': 'BSIT',
        'phone_number': '09069529456',
      },

    ]
  }
];