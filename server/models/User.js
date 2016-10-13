var mongoose = require('mongoose');

// Create the MovieSchema.
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Export the model schema.
module.exports = UserSchema;