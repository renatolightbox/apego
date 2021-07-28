const express = require('express');
const router = express.Router()
const SiteController = require('./site.controller');

router.get('/menu', SiteController.MenuPage)
router.get('/', SiteController.IndexPage)
router.get('/boletos' , SiteController.BoletosPage)
//router.get('/chat' ,SiteController.ChatPage )
router.get('/contato' ,SiteController.ContatoPage)
router.get('/cadastro' ,SiteController.CadastroPage)
router.get('/login' , SiteController.LoginPage)
router.get('/mural-de-avisos' ,SiteController.MuralPage)
router.get('/perfil' , SiteController.PerfilPage)
router.get('/QuemSomos' , SiteController.QuemSomosPage)
router.get('/contas' , SiteController.ContasPage)
//router.get('/reservas' , SiteController.ReservasPage )

router.get('/cadastro/:id', SiteController.findById)
router.get('/login/:id', SiteController.findById)

router.post('/cadastro' , SiteController.create)

router.put('/cadastro/:id', SiteController.update)
router.put('/login/:id', SiteController.update)

router.delete('/cadastro/:id', SiteController.remove)
router.delete('/login/:id', SiteController.remove)


router.post('/login', SiteController.doLogin)
router.get('/logout', SiteController.doLogout)

router.post('/register', SiteController.doRegister)


module.exports = router;

