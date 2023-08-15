
class SiteController {
  // [GET] /
          index(req, res){
            res.render('home');
          }    
  // [GET] /search
          seach(req, res){
            res.send('search');
          }                                                            
}           

module.exports = new SiteController;