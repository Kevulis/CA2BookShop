const db = require("../models");
const Bookshop = db.bookshop;

exports.create = (req, res) => {
    //request validation
    if (!req.body.title) {
        res.status(400).send({ message: "Cannot be empty." });
        return;
    }

    const bookshop = new Bookshop({
        section: req.body.section,
        item: req.body.item,
        price: req.body.price,
        published: req.body.published ? req.body.published : false
    });

    bookshop
        .save(bookshop)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "An error has occurred while inserting the book into the list."
            });
        });
};
//find all
exports.findAll = (req, res) => {
    const item = req.query.title;
    let condition = item ? { item: { $regex: new RegExp(item), $options: "i" } } : {};

    Bookshop.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ops. An error has occured"
            });
        });
};
//find one
exports.findOne = (req, res) => {
    const id = req.params.id;

   Bookshop.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found any book with the id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving the book with ref. id= " + id});
            });
};
//update
exports.update = (req, res) => {
    const id = req.params.id;

    if (!req.body) {
        return res.status(400).send({
            message: "Data to update cannot be empty!"
        });
    }

    Bookshop.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
       .then(data => {
            if (!data) {
                res.status(404).send({
                    message: 'Cannot update book with id=${id}.'
            });
          } else res.send({ message: "Book detail was successfully updated." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating book with id=" + id
            });
        });
  
};
//delete
exports.delete = (req, res) => {
    const id = req.params.id;

    Bookshop.findByIdAndRemove(id)
        .then(data => {
        if (!data) {
            res.status(404).send({
                message: 'Cannot delete book with id=${id}.'
            });
        } else {
            res.send({
                message: "Book was successfully deleted!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete book with id=" + id
        });
    });

};

// delete all from the database.
exports.deleteAll = (req, res) => {
    Bookshop.deleteMany({})
    .then(data => {
    res.send({
        message: '${data.deletedCount} books were successfully deleted!'
    });
})
.catch(err => {
    res.status(500).send({
        message:
            err.message || "Could not delete books. Please, try again."
  });
});
};

