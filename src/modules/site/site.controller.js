const AuthService = require('../auth/auth.service');
const SiteService = require('../users/users.service')

class SiteController {
    static BoletosPage(req, res) {
        res.render('boletos', { title: 'Express' });
    }

   // static ChatPage(req, res) {
     //   res.render('chat', { title: 'Express' });

   // }

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

   // static ReservasPage(req, res) {
     //   res.render('reservas', { title: 'Express' });
   // }
   
   static async findAll (req,res) {
    const user = await SiteService.findAll()

  }

  static async findAll (req,res) {
    const user = await SiteService.findAll()
  }



static findById (req, res) {
const { id } = req.params

 const user =SiteService.findById(id)


}

static async create (req, res) {
 const newUser = {
   nome: req.body.nome,
    email: req.body.email,
  condominio: req.body.condominio,
   Unidade: req.body.unidade,
    senha: req.body.senha
}


const user = await UserService.create(newUser)
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



    static async PerfilPage (req, res) {
        const userEmail = req.session.user.email
        const user = await UserService.findByEmail(userEmail)
    
        res.render('perfil', { title: 'APP profile', user })
      }

    static LoginPage (req, res) {
        res.render('login', {
          title: 'APP Entrar'
        })
      }
    

      static async doRegister (req, res) {
        try {
          const newUser = {
            name: req.body.name,
            email: req.body.email,
            phone: '-',
            password: req.body.password
          }

          const user = await UserService.create(newUser)

          req.startSession(user)
    
          res.redirect('/')
        } catch (err) {
          console.log(err)
    
          res.render('register', {
            title: 'APP Cadastro',
            error: err.message
          })
        }
      }

      static async doLogin (req, res) {
        const { email, password } = req.body
    
        try {
          const user = await AuthService.authenticate(email, password)
    
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
    
      static doLogout (req, res) {
        req.session.destroy()
        res.redirect('/')
      }
    }

   
 






module.exports = SiteController



