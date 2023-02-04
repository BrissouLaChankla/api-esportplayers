
const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:8oNRmK6eS41r7Aj2@cluster0.2dzubed.mongodb.net/bepolol';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))

  .catch(error => console.error(error));
  