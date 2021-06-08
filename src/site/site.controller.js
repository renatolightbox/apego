class SiteController {
    static MenuPage(req, res) {
        res.render('menu', { title: 'Express' });
    }

    static IndexPage(req,res) {
        res.render('index', { title: 'Express' });
    }
}
module.exports = SiteController
