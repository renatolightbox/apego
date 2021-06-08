class SiteController {

    static BoletosPage(req, res) {
        res.render('boletos', { title: 'Express' });
    }

    static ChatPage(req, res) {
        res.render('chat', { title: 'Express' });

    }

    static ContatoPage(req, res) {
        res.render('contato', { title: 'Express' });

    }

    static CriarLoginPage(req, res) {
        res.render('criarLogin', { title: 'Express' });

    }

    static IndexPage(req, res) {
        res.render('index', { title: 'Express' });
    }

    static LoginPage(req, res) {
        res.render('login', { title: 'Express' });
    }

    static MenuPage(req, res) {
        res.render('menu', { title: 'Express' });
    }


    static MuralPage(req, res) {
        res.render('mural', { title: 'Express' });

    }

    static PerfilPage(req, res) {
        res.render('perfil', { title: 'Express' });

    }

    static QuemSomosPage(req, res) {
        res.render('quem somos', { title: 'Express' });

    }

    static ReservasPage(req, res) {
        res.render('reservas', { title: 'Express' });
    }






}

module.exports = SiteController



