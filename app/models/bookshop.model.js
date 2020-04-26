/**
 * file that defines the schema for mongoose
 */
module.exports = mongoose => {
    const bookshop = mongoose.model(
        "bookshop",
        mongoose.Schema(
            {
                section: String,
                item: String,
                price: String,
                title: Number,
                published: Boolean
        },
        { timestamps: true }
      )
    );
  
    return bookshop;
  };