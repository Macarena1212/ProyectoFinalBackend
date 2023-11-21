const {check} = require ("express-validator")

const checks = [
    check("Nombre")
        .notEmpty().withMessage("El campo Nombre es obligatorio")
        .isString().withMessage("El campo Nombre tiene que ser un string"),
    check("Ingredientes")
        .notEmpty().withMessage("El campo Ingredientes es obligatorio")
        .isString().withMessage("El campo Ingredientes tiene que ser un string"),
    check("graduacionAlcoholica")
        .notEmpty().withMessage("El campo Graduación es obligatorio")
        .isNumeric().withMessage("El campo Graduación tiene que ser un número"),
];

module.exports= checks;
