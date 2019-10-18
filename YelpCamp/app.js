const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

var campgrounds= [
    {name:"Salmon Creek", image:"https://www.backpackerguide.nz/wp-content/uploads/2015/12/camping-2581242_1920.jpg"},
    {name:"Granite Hill", image:"https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg"},
    {name:"Mountain Desert", image:"https://s3.amazonaws.com/imagescloud/images/medias/camping/camping-tente.jpg"},
]

app.get('/', (req, res) => {
    res.redirect("campgrounds");
});

app.get("/campgrounds", (req,res)=>{
    res.render("campgrounds",{campgrounds:campgrounds})
});

app.post("/campgrounds", (req, res) => {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image,image };
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req, res)=> {
    res.render("new")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))