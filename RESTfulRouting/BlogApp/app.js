var express = require("express"),
    methodOverride = require("method-override"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    app = express();

//App configurations
const port = 3000;
mongoose.connect("mongodb://localhost:27017/restful_blog_app", { useNewUrlParser: true, useUnifiedTopology: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//Mongoose config
//title, image, body, created
var blogSchema = mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});

var Blog = mongoose.model("Blog", blogSchema);
/*
Blog.create({
    title: "Test blog",
    image: "https://images.unsplash.com/photo-1571993192866-202f70b7ec7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    body: "Body of the post"
})
*/
//Restful Routes
app.get("/", (req, res) => {
    res.redirect("/blogs");
});

//Index
app.get("/blogs", (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) {
            console.error(err);
        } else {
            res.render("index", { blogs: blogs });
        }
    });
});

//New
app.get("/blogs/new", (req, res) => {
    res.render("new");
});

//Create
app.post("/blogs", (req, res) => {
    Blog.create(req.body.blog, (err, newBlog) => {
        if (err) {
            console.error(err);
            res.render("new");
        } else {
            res.redirect("/blogs");
        }
    })
});

//Show
app.get("/blogs/:id",(req,res)=>{
    Blog.findById(req.params.id, (err,foundBlog)=>{
        if(err){
            console.error(err);
            res.redirect("/blogs");
        }else{
            res.render("show", {blog: foundBlog})
        }
    })
});

//Edit
app.get("/blogs/:id/edit", (req,res)=>{
    Blog.findById(req.params.id, (err,foundBlog)=>{
        if(err){
            console.error(err);
            res.redirect("/blogs");
        }else{
            res.render("edit", {blog: foundBlog});
        }
    })
});

//Update
app.put("/blogs/:id",(req,res)=>{
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err,updatedBlog)=>{
        if(err){
            console.error(err);
            res.redirect("/blogs");
        }else{
            res.redirect("/blogs/"+req.params.id);
        }
    });
});

//Destroy
app.delete("/blogs/:id", (req,res)=>{
    Blog.findByIdAndRemove(req.params.id,(err)=>{
        if(err){
            console.error(err);
            res.redirect("/blogs");
        }else{
            console.log("Post eliminado");
            res.redirect("/blogs");
        }
    })
});


app.listen(port, () => console.log(`BlogApp listening on port ${port}!`));
