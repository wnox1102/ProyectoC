const express = require("express");
const router = express.Router();
const personaController = require("../../controllers/personacontroller");

router.get("/", (req, res) => {
  res.render("Home", { title: "Home" });
});

router.get("/Create", (req,res)=>{
  res.render("create", {title:'Create'});
});

router.post("/Crud/Create" ,(req,res)=>{
  
  personaController.CreatePersona(req.body);
  res.redirect('/');
});

router.get("/prepa", (req, res) => {
  res.render("prepa", { title: "prepa" });
});

router.get("/Read", (req,res)=>{
  personaController.GetPersona((persona, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to show empleados"
      });
    else {
      
      res.render("read", {persona});
    }
  });
});

router.get("/Update", (req,res)=>{
  res.render("update", {title:'Update'});
});

router.post("/Crud/Update", (req, res) => {
  console.log(req.body);
    if(!!req.body.cedula){ 
      console.log(req.body.cedula);
    personaController.UpdatePersona(req.body,req.body.cedula);
  }
  res.redirect('/Read');
});

router.get('/Delete', (req,res)=>{
  res.render('delete',{title:'Delete'});
});

router.post("/Crud/Delete",(req,res)=>{
  personaController.DeletePersona(req.body,req.body.cedula);
  res.redirect('/Read');

});


module.exports = router;
