# RESTful routes

**name**    **url**         **verb**    **description**
================================================================
INDEX       /dogs           GET         Display a list of all dogs
NEW         /dogs/new       GET         Display form to make a new dog
CREATE      /dogs           POST        Add a new dog
SHOW        /dogs/:id       GET         Shows info about one dog
EDIT        /dogs/:id/edit  GET         Show edit from one dog
UPDATE      /dogs/:id       PUT         Update a particular dog, then redirect
DESTROY     /dogs/:id       DELETE      Delete a particular dog, then redirect