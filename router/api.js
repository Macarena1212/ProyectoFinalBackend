const express = require ("express")
const router = express.Router()
const apiController = require ("../controller/apiController")
const {validarID} = require ("../middlewares/validarID")
const checks = require("../middlewares/checks")
const {validarChecks} = require ("../middlewares/validarChecks")

router.get ("/list", apiController.apiList)
router.get ("/buscarid/:id", validarID, apiController.apiFindID)
router.post ("/crear",checks, validarChecks, apiController.apiCrearTrago)
router.put ("/edit",validarID, checks, validarChecks,apiController.apiPut)
router.delete ("/eliminar", validarID,apiController.apiDelete)


module.exports = router