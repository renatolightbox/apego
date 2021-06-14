const {Morador} = require('../models/Morador')

// deixar aqui ou no site controller
//conferir morador ou moradores 
//destroy ou delet 

class UserControler { 
    // index pu loin ?
    async index(req,res) {
        try{
            const moradores = await Morador.findAll();

            return res.json(moradores);
        }catch (err){
            return res.status(400).json({error: err.message });
        }

        }

        async show(req,res){
            try{
                const moradores = await Morador.findByPk(req.params.id);
                return res.json(moradores);
            }catch (err){
                return res.status(400).json({error: err.message });

            }
        }
        
        async store(req,res) {
            try{
                const moradores= await Morador.create(req.body);
                return res.json(moradores);
            }catch (err){
                return res.status(400).json({error: err.message });
            }
        }


            async update(req,res) {
                try{
                    const moradores =await Morador.findByPk(req.params.id);
                    await moradores.update(req.body);

                    return res.json({moradores});
                }catch(err) {
                    return res.status(400).json({error: err.message });

                }
                }

            async destroy(req,res){
                try{
                    const moradores = await Moradores.findByPk(re.params.id);
                    await moradores.destroy();
                    
                    return res.json();
                }catch(err) {
                    return res.status(400).json({error: err.message });

                }
            }

            }

            module.exports= new UserControler();



            

