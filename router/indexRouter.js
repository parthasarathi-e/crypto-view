const {Router} = require("express");
const tickerModel = require("../models/tickerModel");

const router = Router();

router.get("/",async (req,res)=>{
    let data = await tickerModel.find();
    res.render("index.ejs",{data});
})

module.exports = router;