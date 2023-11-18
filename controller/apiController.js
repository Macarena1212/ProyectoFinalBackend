const { Trago } = require('../models/cantina'); 

const apiController = {
   async apiList(req, res){
    const list = await Trago.find()
    res.json(list)
   },

   async apiCrearTrago(req, res) {
        try {
            const nuevoTrago = new Trago(req.body);
            await nuevoTrago.save();
            res.status(201).json(nuevoTrago);
        } catch (error) {
            res.json(error);
        }
   },
   
    async apiPut(req, res) {
        const result = await Trago.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json(result);
    },

    async apiFindID(req, res) {
        const list = await Trago.findById(req.params.id);
        res.json(list);
    },

    async apiFindOne(req, res) {
        const list = await Trago.findById(req.query );
        res.json(list);
    },

    async apiSearch(req, res) {
        const list = await Trago.find(req.query)
        res.json(list);
    },

    async apiDelete(req, res) {
        await Trago.findByIdAndDelete(req.params.id);
        res.status(200).json({
            msg: "Se ha borrado el trago"
        });
    },
};

module.exports = apiController;
