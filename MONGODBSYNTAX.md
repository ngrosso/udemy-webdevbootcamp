# Mongo db syntax

**show dbs** -> *Muestra bases de datos*
**use demo** -> *Usa bd "demo" si no existe tambien la crea*
**db.dogs.insert({name:"John", breed:"collie"})** -> *Crea la coleccion "dogs" e inserta el primer registro*
**show collections** -> *Muestra las colecciones de la bd*
**db.dogs.find()** -> *select all*
**db.dogs.find({breed:"collie"})** -> *selecciona todas las razas "collie"*
**db.dogs.update({name:"King"},{$set: {name:"Tater", isCute:true}})** -> *update sin pisar todo el documento (sin el $set se bardea todo)*
**db.dogs.remove({name:"Lucy"})** -> *delete where name = Lucy*