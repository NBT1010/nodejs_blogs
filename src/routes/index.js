const newRouter = require('./news');
const SiteRouter = require('./site');
const courseRouter = require('./courses');

function route(app) {
  app.use('/news', newRouter);
  app.use('/courses', courseRouter);  
  app.use('/', SiteRouter);
}

module.exports = route;
