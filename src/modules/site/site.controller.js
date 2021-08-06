//const {locals} = require('../../app')
const AuthService = require('../auth/auth.service');
const UserService = require('../users/users.service');


class SiteController {
  static BoletosPage(req, res) {
    res.render('boletos', { title: 'Express' });
  }

  // static ChatPage(req, res) {
  // res.render('chat', { title: 'Express' });

  // }

  static ContatoPage(req, res) {
    res.render('contato', { title: 'Express' });

  }

  static CadastroPage(req, res) {
    res.render('cadastro', { title: 'Express' });

  }

  static IndexPage(req, res) {
    if (res.locals.isLogged) {
      return res.redirect('/menu')
    }
    res.render('index', { title: 'Express' });
  }

  static LoginPage(req, res) {
    res.render('login', { title: 'Express' });
  }

  static MenuPage(req, res) {
    console.log(req.session)
    res.render('menu', { title: 'Express' });
  }


  static MuralPage(req, res) {
    res.render('mural-de-avisos', { title: 'Express' });

  }

  static async PerfilPage(req, res) {
    const user = await UserService.findById(req.session.user.id)

    res.render('perfil', { title: 'Express', user });


  }

  static QuemSomosPage(req, res) {
    res.render('QuemSomos', { title: 'Express' });

  }

  static ContasPage(req, res) {
    res.render('contas', { title: 'Express' });

  }

  static AprovarPage(req, res) {
    res.render('aprovar', { title: 'Express' });

  }

  //static ReservasPage(req, res) {
  //  res.render('reservas', { title: 'Express' });
  // }

  static async findAll(req, res) {
    const user = await SiteService.findAll()

  }

  //static async findAll(req, res) {
  // const user = await SiteService.findAll()
  //}



  static findById(req, res) {
    const { id } = req.params

    const user = SiteService.findById(id)


  }

  static async create(req, res) {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      condominio: req.body.condominio,
      unidade: req.body.unidade,
      senha: req.body.senha
    }


    const user = await UserService.create(newUser)
    res.json(user)
  }

  static async update(req, res) {

    try {
      console.log(req.session)
      const user = await UserService.findById(req.session.user.id)
      user.name = req.body.name
      user.condominio=req.body.condominio
      user.unidade=req.body.unidade
      await user.save()
     
      res.render('perfil', { title: 'Express', user ,message:"usuario atualizado com sucesso "});


    } catch (err) {
      console.log(err)
      res.status(400).json(err)
    }
  }

  static async remove(req, res) {
    const { id } = req.params

    const result = await SiteService.remove(id)

    res.json({ success: result })
  }



  static async PerfilPage(req, res) {
    const userEmail = req.session.user.email
    const user = await UserService.findByEmail(userEmail)

    res.render('perfil', { title: 'APP profile', user })
  }

  static LoginPage(req, res) {
    res.render('login', {
      title: 'APP Entrar'
    })
  }


  static async doRegister(req, res) {
    try {
      const newUser = {
        name: req.body.username,
        email: req.body.email,
        condominio: req.body.condominio,
        unidade: req.body.unidade,
        senha: req.body.senha
      }


      const user = await UserService.create(newUser)

      req.startSession(user)

      res.redirect('/')
    } catch (err) {
      console.log(err)

      res.render('cadastro', {
        title: 'APP Cadastro',
        error: err.message
      })
    }
  }

  static async doLogin(req, res) {
    const { username, password } = req.body

    try {
      const user = await AuthService.authenticate(username, password)

      if (!user) {
        return res.render('login', {
          title: 'APP Entrar',
          error: 'Usuário ou senha inválidos'
        })
      }

      req.startSession(user)

      res.redirect('/')
    } catch (err) {
      console.log(err)

      res.render('login', {
        title: 'APP Entrar',
        error: 'Erro inesperado'
      })
    }
  }

  static doLogout(req, res) {
    req.session.destroy()
    res.redirect('/')
  }
}









module.exports = SiteController



