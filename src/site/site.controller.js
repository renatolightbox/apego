const SiteService = require('./site.service')

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

    static CadastroPage(req, res) {
        res.render('cadastro', { title: 'Express' });

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
        res.render('mural-de-avisos', { title: 'Express' });

    }

    static PerfilPage(req, res) {
        res.render('perfil', { title: 'Express' });

    }

    static QuemSomosPage(req, res) {
        res.render('QuemSomos', { title: 'Express' });

    }

    static ReservasPage(req, res) {
        res.render('reservas', { title: 'Express' });
    }


    // por pagina que precisa ?

    static async findAll (req, res) {
        const users = await SiteService.findAll()
    }

 static findById (req, res) {
    const { id } = req.params

    const user =SiteService.findById(id)

   // res.json(user)
  }

  static async create (req, res) {
    const newUser = {
      nome: req.body.nome,
      email: req.body.email,
      condominio: req.body.condominio,
      Unidade: req.body.unidade,
      senha: req.body.senha
}
const user = await SiteService.create(newUser)
res.json(user)
}

static async update (req, res) {
    try {
      const { id } = req.params

      const userData = {
        nome: req.body.nome,
        email: req.body.email,
        condominio: req.body.condominio,
        Unidade: req.body.unidade,
        status: req.body.status
      }

      const userUpdated = await SiteService.update(id, userData)

      res.json(userUpdated)
    } catch (err) {
      res.status(400).json(err)
    }
  }

  static async remove (req, res) {
    const { id } = req.params

    const result = await SiteService.remove(id)

    res.json({ success: result })
  }
}


module.exports = SiteController



