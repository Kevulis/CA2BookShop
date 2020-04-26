module.exports = app => {
    
    const bookshop = require("../controllers/Bookshop.controller");

    let router = require("express").Router();

    //create a new entree
    router.post("/", bookshop.create);

    //retrieve all in treatments_list
    router.get("/", bookshop.findAll);

    //retrieve one treatment by id
    router.get("/:id", bookshop.findOne);

    //update a treatment item by id
    router.put("/:id", bookshop.update);

    //delete treatment item by id
    router.delete("/:id", bookshop.delete);

    //delete all treatment in the list
    router.delete("/", bookshop.deleteAll);

    app.use('/api/bookshop', router);
}