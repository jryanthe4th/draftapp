/**
 * EasyMoneyDraftSelectionController
 *
 * @description :: Server-side logic for managing easymoneydraftselections
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	easyMoneyDraftboard: function(req, res) {

		EasyMoneyDraftSelection.create({

			playerName: req.param('playerName'),
			position: 	req.param('position'),
			owner: 		req.session.me,

		}, function easyMoneyDraftSelectionCreated(err, newEasyMoneyDraftSelection) {

			if(err) {
				console.log("err: ", err);
			}

			return res.json({
				id: newEasyMoneyDraftSelection.id
			});
		});
	}
};
