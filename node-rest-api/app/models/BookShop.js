import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BookShopSchema = new Schema({
	service: {
		type: String,
		required: [ true, 'Service is required' ]
	},
	item: {
		type: String,
		required: [ true, 'Item  is required' ]
	},
	price: {
		type: String,
		required: [ true, 'Price  is required' ]
	},
	createdAt: {
		type: Date,
		default: new Date()
	}
});

const BookShop = mongoose.model('BookShop', BookShopSchema);
export default BookShop;
