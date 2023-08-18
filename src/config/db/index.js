const mongoose = require('mongoose');
function connect() {
  try {
    mongoose
      .connect('mongodb://127.0.0.1:27017/blog_dev')
      .then(() => console.log('Connected!'));
  } catch (error) {
    console.log('failure!!');
  }
}
module.exports = { connect };
