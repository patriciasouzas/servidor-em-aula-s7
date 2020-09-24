const express = require("express")
const router = express.Router()
const controler = require("../controller/filmesController") // função getAll dentro desse caminho

router.get("/", controler.getAll)

module.exports = router