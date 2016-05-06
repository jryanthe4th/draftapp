/**
 * TradeController
 *
 * @description :: Server-side logic for managing Trades
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	tradeboard: function(req, res) {

		Trade.create({

			trade: req.param('trade'),

		}, function tradeCreated(err, newTrade) {

			if(err) {
				console.log("err: ", err);
			}

			return res.json({
				id: newTrade.id
			});
		});
	}
};

