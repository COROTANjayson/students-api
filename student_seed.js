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
        'email': 'zainaaronr@gmail.com',
        'first_name': 'Zain Aaron ',
        'last_name': 'Bataller',
        'middle_name': 'Caris',
        'phone_number': '09069529456',
        'gender': 'male',
        'address': 'Carmen Cagayan de Oro city',
        'school': 'USTP',
        'course': 'BSIT',
        'year': '4th year'
      },
      {
        'student_id': '2019560625',
        'email': 'carlomagno@gmail.com',
        'first_name': 'Carlomagno',
        'last_name': 'Santiago',
        'middle_name': 'Malapitan',
        'phone_number': '09069529567',
        'gender': 'male',
        'address': 'Lumbia Cagayan de Oro city',
        'school': 'USTP',
        'course': 'BSTCM',
        'year': '3rd year'
      },
      {
        'student_id': '2019540432',
        'email': 'graciaestrada@gmail.com',
        'first_name': 'Gracia',
        'last_name': 'Estrada',
        'middle_name': 'Rashad',
        'phone_number': '09069529654',
        'gender': 'female',
        'address': 'Lapasan Cagayan de Oro city',
        'school': 'USTP',
        'course': 'BSCPE',
        'year': '3rd year'
      },
      {
        'student_id': '2019556532',
        'email': 'eloisadrada@gmail.com',
        'first_name': 'Eloisa',
        'last_name': 'Andrada',
        'middle_name': 'Nailea',
        'phone_number': '09069525276',
        'gender': 'female',
        'address': 'Lapasan Cagayan de Oro city',
        'school': 'USTP',
        'course': 'BSCPE',
        'year': '3rd year'
      },
      {
        'student_id': '2018549832',
        'email': 'jenifer@gmail.com',
        'first_name': 'Jenifer',
        'last_name': 'Rosemary',
        'middle_name': 'Talong',
        'phone_number': '09079569654',
        'gender': 'female',
        'address': 'Lapasan Cagayan de Oro city',
        'school': 'USTP',
        'course': 'BSIT',
        'year': '4th year'
      },
      {
        'student_id': '2019549873',
        'email': 'armand@gmail.com',
        'first_name': 'Armand',
        'last_name': 'Salvador',
        'middle_name': 'Rufio',
        'phone_number': '09079569556',
        'gender': 'male',
        'address': 'Lumbia Cagayan de Oro city',
        'school': 'USTP',
        'course': 'BSIT',
        'year': '3rd year'
      },
      {
        'student_id': '2020549873',
        'email': 'garyjoey@gmail.com',
        'first_name': 'Gary Joey  ',
        'last_name': 'Borja',
        'middle_name': 'Davis',
        'phone_number': '09079459786',
        'gender': 'male',
        'address': 'Carmen Cagayan de Oro city',
        'school': 'USTP',
        'course': 'BSCE',
        'year': '2nd year'
      },
      {
        'student_id': '2019549456',
        'email': 'armand@gmail.com',
        'first_name': 'Armand',
        'last_name': 'Salvador',
        'middle_name': 'Rufio',
        'phone_number': '09079569556',
        'gender': 'male',
        'address': 'Lumbia Cagayan de Oro city',
        'school': 'USTP',
        'course': 'BSIT',
        'year': '3rd year'
      },
      {
        'student_id': '2019549513',
        'email': 'alessandra@gmail.com',
        'first_name': 'Alessandra Carina ',
        'last_name': 'Magbanua',
        'middle_name': 'Isidro',
        'phone_number': '09079569780',
        'gender': 'male',
        'address': 'Carmen Cagayan de Oro city',
        'school': 'USTP',
        'course': 'BSTCM',
        'year': '3rd year'
      },
      {
        'student_id': '2020000597',
        'email': 'makayla@gmail.com',
        'first_name': 'Makayla  ',
        'last_name': 'Balandra',
        'middle_name': 'Gordon',
        'phone_number': '09079569450',
        'gender': 'male',
        'address': 'Lapasan Cagayan de Oro city',
        'school': 'USTP',
        'course': 'BSTCM',
        'year': '4th year'
      },
    ]
  }
];