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