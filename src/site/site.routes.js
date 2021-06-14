const express = require('express');
const SiteController = require('./site.controller');
const router = express.Router()

router.get('/menu', SiteController.MenuPage)
router.get('/', SiteController.IndexPage)
router.get('/boletos' , SiteController.BoletosPage)
router.get('/chat' ,SiteController.ChatPage )
router.get('/contato' ,SiteController.ContatoPage)
router.get('/CriarLogin' ,SiteController.CriarLoginPage)
router.get('/login' , SiteController.LoginPage)
router.get('/mural' ,SiteController.MuralPage)
router.get('/perfil' , SiteController.PerfilPage)
router.get('/QuemSomos' , SiteController.QuemSomosPage)
router.get('/reservas' , SiteController.ReservasPage )

router.post('/morador' , SiteController.store)
router.put('/moradores/:id' , SiteController.update)
routes.delete('/moradores/:id' , SiteController.destroy)

module.exports = router;

