const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
mongoose.connect("mongodb://localhost/cat_app");

//Esquema
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// define Cat, con el esquema creado y le da los metodos
var Cat = mongoose.model("Cat", catSchema);
/*
var george = new Cat({
    name: "Mrs. Norris",
    age: 7,
    temperament: "Evil"
});

george.save((err,cat)=>{
    if(err){
        console.error("Error found!");
        console.error(err);
    } else {
        console.log("Cat Saved!");
        console.log(cat)
    } 
});*/

// Create hace todo de una mas que save
Cat.create({
    name: "Morgana",
    age: 15,
    temperament: "Bland"
}, (err, cat)=>{
    if(err){
        console.error("Error found!");
        console.error(err);
    } else {
        console.log("Cat Saved!");
        console.log(cat)
    } 
})

//Select all
Cat.find({},(err, cats)=>{
    if(err){
        console.error("Error retrieving cats!");
        console.error(err);
    } else {
        console.log(cats)
    }
})