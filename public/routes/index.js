const express = require("express");
const router = express.Router();
const passport  = require('../../config/passport');

router.get("/", (req, res) => {
  res.render("Home", { title: "Home" });
});

router.get("/Profile",(req,res)=>{
  res.render('profile',{title:"Profiles"});
});


router.get("/Proposal",(req,res)=>{
  res.render('proposal', {title:"Proposal"});
});



module.exports = router;
