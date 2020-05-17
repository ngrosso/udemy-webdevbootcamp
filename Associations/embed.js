var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", { useNewUrlParser: true, useUnifiedTopology: true });

//Post model - title, content (definido primero porque se necesita el Schema para user)
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post",postSchema);

//User model - user, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var  User = mongoose.model("User",userSchema);

// Creacion por primera vez de datos de ejemplo
// var newUser = new User({
//    email:"charlie@brown.edu",
//    name:"Charlie Brown"
// });

// var newPost = new Post({
//    title:"Reflections on apples",
//    content:"Apples are delicious"
// });

// newUser.save(function(err,user){
//    if(err){
//        console.log(err);
//    }else {
//        console.log(user);
//    }
// });
// newPost.save(function(err,post){
//    if(err){
//        console.log(err);
//    }else{
//        console.log(post);
//    }
// })

// Ejemplo 2 con items Asociados
// var newUser2 = new User({
//     email:"hermione@howgwarts.edu",
//     name:"Hermione Granger"
// });

// newUser2.posts.push({
//     title:"How to brew polyjuice potion",
//     content:"GO TO CLASS TO LEARN IT!!!"
// });

// newUser2.save(function(err,user){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(user)
//     }
// })

// Ejemplo de buscar y agregar un post
// User.findOne({name:"Hermione Granger"},function(err,user){
//     if(err){
//         console.log(err)
//     }else{
//         //console.log(user);
//         user.posts.push({
//             title: "3 things I did",
//             content:"Fix Harry's glasses, Study a lot, Study more"
//         })
//         user.save(function(err,user){
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log(user)
//             }
//         })
//     }
// })