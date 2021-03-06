var express = require('express'),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Schema setup
mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true, useUnifiedTopology: true });
//genero el esquema campground
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

//genero el modelo campground a partir del esquema
var Campground = mongoose.model("Campground", campgroundSchema);
/*
var campgrounds = [
    { name: "Salmon Creek", image: "https://www.backpackerguide.nz/wp-content/uploads/2015/12/camping-2581242_1920.jpg" },
    { name: "Granite Hill", image: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg" },
    { name: "Mountain Desert", image: "https://s3.amazonaws.com/imagescloud/images/medias/camping/camping-tente.jpg" },
]*/


app.get('/', (req, res) => {
    res.redirect("campgrounds");
});

//restful - INDEX
app.get("/campgrounds", (req, res) => {
    //llamada de mongoDB, busca todos los campgrounds
    Campground.find({}, (err, allCampgrounds) => {
        if (err) {
            console.error(err);
        } else {
            res.render("index", { campgrounds: allCampgrounds })
        }
    })
});

//restful - CREATE
app.post("/campgrounds", (req, res) => {
    //obtiene nombre e imagen del campground
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.desc;
    //genera un objeto con los parametros obtenidos
    var newCampground = { name: name, image: image, description: desc };
    //los guarda en la base de datos
    Campground.create(newCampground, (err, newCreated) => {
        if (err) {
            console.error(err);
        } else {
            //si no hubo errores redirige a campgrounds
            console.log(newCreated);
            res.redirect("/campgrounds");
        }
    })
});

//restful - NEW
app.get("/campgrounds/new", (req, res) => {
    res.render("new")
})

//restful - SHOW
app.get("/campgrounds/:id", (req, res) => {
    var id = req.params.id
    Campground.findById(id, (err, foundCampground) => {
        if (err) {
            console.error(err);
        } else {
            res.render("show", { campground: foundCampground });
        }
    });
})

app.listen(port, () => console.log(`YelpCamp app listening on port ${port}!`));