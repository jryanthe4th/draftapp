/**
 * OwnersController
 *
 * @description :: Server-side logic for managing Owners
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	draftorder: function(req, res) {

		owner.create({

			numberOfOwners: req.param('numberOfOwners'),
			numberOfRounds: req.param('numberOfRounds')

		}, function draftgridCreated(err, newDraftGrid) {

			if(err) {
				console.log("err: ", err);
			}

			return res.json({
				id: newDraftGrid.id
			});
		});
	}



	// draftorder: function(req, res) {

	// 	Owner.create({

	// 		ownerRd1: req.param('ownerRd1')

	// 	}, function ownerCreated(err, newOwner) {

	// 		if(err) {
	// 			console.log("err: ", err);
	// 		}

	// 		return res.json({
	// 			id: newOwner.id
	// 		});
	// 	});
	// }
};

