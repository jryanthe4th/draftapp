/**
 * TradeController
 *
 * @description :: Server-side logic for managing Trades
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	tradeboard: function(req, res) {

		Trade.create({

			ownerA: req.param('ownerA'),
			tradeA1: req.param('tradeA1'),
			tradeA2: req.param('tradeA2'),
			tradeA3: req.param('tradeA3'),
			tradeA4: req.param('tradeA4'),
			tradeA5: req.param('tradeA5'),

			ownerB: req.param('ownerB'),
			tradeB1: req.param('tradeA1'),
			tradeB2: req.param('tradeB2'),
			tradeB3: req.param('tradeB3'),
			tradeB4: req.param('tradeB4'),
			tradeB5: req.param('tradeB5'),

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

