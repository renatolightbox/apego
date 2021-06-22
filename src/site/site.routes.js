const { Router } = require('express');
const express = require('express');
const router = express.Router()

const SiteController = require('./site.controller');

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

router.get('/CriarLogin/:id', SiteController.findById)
router.get('/login/:id', SiteController.findById)

router.post('/CriarLogin' , SiteController.create)

router.put('/CriarLogin/:id', SiteController.update)
router.put('/login/:id', SiteController.update)

router.delete('/CriarLogin/:id', SiteController.remove)
router.delete('/login/:id', SiteController.remove)




module.exports = router;

