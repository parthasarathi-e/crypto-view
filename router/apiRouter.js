const { default: axios } = require("axios");
const {Router} = require("express");
const pgClient = require("../config/mongoConnect");
const tickerModel = require("../models/tickerModel");

const router = Router();

router.post("/tickers",async (req,res)=>{
   const {data}= await axios.get("https://api.wazirx.com/api/v2/tickers");
   const result = Object.values(data).slice(0, 10);
   const dbData = await tickerModel.insertMany(result);
   if(req.body.ejs == "update") return res.redirect("/")
   if(dbData) res.status(200).json({success:true,message:"Data fetched and added to database successfullty."});
   else res.status(400).json({success:false,message:"Error fetching data or adding to the database."});
})
router.get("/tickers",async (req,res)=>{
    let data = await tickerModel.find();
    if(data) res.status(200).json({success:true,data});
    else res.status(400).json({success:false,message:"Error fetching data from database"});
})

module.exports = router;