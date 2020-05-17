# RESTful routes

**name**    **url**         **verb**    **description**                             **Mongoose Method**    
=======================================================================================================
INDEX       /dogs           GET         Display a list of all dogs                  Dog.find()
NEW         /dogs/new       GET         Display form to make a new dog              n/a
CREATE      /dogs           POST        Add a new dog                               Dog.create()
SHOW        /dogs/:id       GET         Shows info about one dog                    Dog.findById()
EDIT        /dogs/:id/edit  GET         Show edit from one dog                      Dog.findById()
UPDATE      /dogs/:id       PUT         Update a particular dog, then redirect      Dog.findByIdAndUpdate()    
DESTROY     /dogs/:id       DELETE      Delete a particular dog, then redirect      Dog.findByIdAndRemove()