import BaseController from './base.controller';
import BookShop from '../models/BookShop';

class BookShopController extends BaseController {
	whitelist = [ 'service', 'item', 'price' ];

	insert = async (req, res, next) => {
		const params = this.filterParams(req.body, this.whitelist);
		let BookShop = new BookShop({
			...params
		});
		try {
			const savedBookShop = await BookShop.save();
			return res.status(201).json({ message: 'success', BookShop: savedBookShop });
		} catch (err) {
			err.status = 400;
			next(err);
		}
	};

	update = async (req, res, next) => {
		const params = this.filterParams(req.body, this.whitelist);
		const BookShopObj = {
			...params
		};
		try {
			const updatedBookShop = await BookShop.findByIdAndUpdate(
				{ _id: req.params.BookShopId },
				{ $set: BookShopObj },
				{ new: true }
			);
			if (!updatedBookShop) {
				return res.status(400).json({ message: 'BookShop Not Found!' });
			}
			return res.status(200).json({ message: 'BookShop Successfully Updated!', salon: updatedBookShop });
		} catch (err) {
			if (err.kind == 'ObjectId') {
				return res.status(400).json({ message: 'BookShop Not Found!' });
			}
			next(err);
		}
	};

	delete = async (req, res, next) => {
		try {
			const deletedBookShop = await BookShop.findByIdAndRemove({ _id: req.body.BookShopId });
			if (!deletedBookShop) {
				return res.status(400).json({ message: 'BookShop Not Found!' });
			}
			return res.status(200).json({ message: 'BookShop deleted successfully!', BookShop: deletedBookShop });
		} catch (err) {
			next(err);
		}
	};

	getAll = async (req, res, next) => {
		try {
			const BookShop = await BookShop.find({});
			if (!BookShops) {
				return res.status(400).json({ message: 'BookShop Not Found!' });
			}
			return res.status(200).json({ message: 'success', BookShop: BookShops });
		} catch (err) {
			next(err);
		}
	};
}

export default new BookShopController();
