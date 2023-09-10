const productServices = require("../services/productService")
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		// Do the magic
		const visitedProducts = productServices.getVisitedProducts();
		const inSalesProducts = productServices.getInSaleProducts();
		res.render("index",{
			visitedProducts,
			inSalesProducts,
		});
	},
	search: (req, res) => {
		// Do the magic
		const keywords = req.query.keywords;
		const foundProducts = productServices.searchProducts(keywords);
		res.render("results",{ foundProducts });
	},
};

module.exports = controller;