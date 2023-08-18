const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
class SiteController {
  // [GET] /course/:slug
  show(req, res, next) {
    Course.findOne({slug: req.params.slug})
        .then(course => {
          res.render('courses/show',{
            course: mongooseToObject(course)
          }); 
        })
        .catch(next)

  }
  // [GET] /course/create
  create(req, res, next) {
    res.render('courses/create');

  }
 // [POST] /course/store
 store(req, res, next) {
  const formData = req.body;
    const course = new Course(formData);
    course.save();

    res.send('save ok');
  }
}

module.exports = new SiteController();
