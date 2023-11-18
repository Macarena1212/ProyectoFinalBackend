const { cantina } = require("../models/cantina");
    
const validarID = async (req, res, next) => {
    try {
        const busqueda = await cantina.findById(req.params.id);
        if (busqueda !== null) {
            next();
        } else {
            res.status(400).json({
                msg: "El ID que ingresaste no es válido",
            });
        }
    } catch (error) {
        res.status(400).json({
            msg: "El ID que ingresaste no es válido",
        });
    }
};

module.exports = { validarID };
