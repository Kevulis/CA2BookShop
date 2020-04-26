// Reference webistes: https://bezkoder.com/node-express-mongodb-crud-rest-api/
// https://bezkoder.com/angular-mongodb-node-express/

module.exports = mongoose => {
    const bookshop = mongoose.model(
        "bookshop",
        mongoose.Schema(
            {
                section: String,
                item: String,
                price: String,
                title: Number,
        },
        { timestamps: true }
      )
    );
  
    return bookshop;
  };