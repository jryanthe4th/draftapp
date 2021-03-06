/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	// Draftboard is homepage
	showHomePage: function(req, res) {

	    // If not logged in, show the public view.
	    if (!req.session.me) {
	    	return res.view('homepage');
	    }

	    // Otherwise, look up the logged-in user and show the logged-in view,
	    // bootstrapping basic user data in the HTML sent from the server
	    User.findOne(req.session.me, function (err, user){
	    	if (err) {
	    		return res.negotiate(err);
	    	}

	    	if (!user) {
	    		sails.log.verbose('Session refers to a user who no longer exists- did you delete a user, then try to refresh the page with an open tab logged-in as that user?');
	    		return res.view('homepage');
	    	}

	    	return res.view('draftboard', {
	    		me: {
	    			id 				: user.id,
	        		firstName 		: user.firstName,
	        		lastName 		: user.lastName,
	        		email 			: user.email,
	        		teamName 		: user.teamName,
	        		isAdmin 		: !!user.admin,
	        		gravatarUrl 	: user.gravatarUrl
	        	}
	    	});
		});
	},

	showTradeboardPage: function(req, res) {

		// If not logged in, show the public view.
	    if (!req.session.me) {
	    	return res.view('homepage');
	    }

	    // Otherwise, look up the logged-in user and show the logged-in view,
	    // bootstrapping basic user data in the HTML sent from the server
	    User.findOne(req.session.me, function (err, user){
	    	if (err) {
	    		return res.negotiate(err);
	    	}

	    	if (!user) {
	    		sails.log.verbose('Session refers to a user who no longer exists- did you delete a user, then try to refresh the page with an open tab logged-in as that user?');
	    		return res.view('homepage');
	    	}

	    	return res.view('tradeboard', {
	    		me: {
	    			id 				: user.id,
	        		firstName 		: user.firstName,
	        		lastName 		: user.lastName,
	        		email 			: user.email,
	        		teamName 		: user.teamName,
	        		isAdmin 		: !!user.admin,
	        		gravatarUrl 	: user.gravatarUrl
	        	}
	    	});
		});
	},

	showDraftorderPage: function(req, res) {

		// If not logged in, show the public view.
	    if (!req.session.me) {
	    	return res.view('homepage');
	    }

	    // Otherwise, look up the logged-in user and show the logged-in view,
	    // bootstrapping basic user data in the HTML sent from the server
	    User.findOne(req.session.me, function (err, user){
	    	if (err) {
	    		return res.negotiate(err);
	    	}

	    	if (!user) {
	    		sails.log.verbose('Session refers to a user who no longer exists- did you delete a user, then try to refresh the page with an open tab logged-in as that user?');
	    		return res.view('homepage');
	    	}

	    	return res.view('draftorder', {
	    		me: {
	    			id 				: user.id,
	        		firstName 		: user.firstName,
	        		lastName 		: user.lastName,
	        		email 			: user.email,
	        		teamName 		: user.teamName,
	        		isAdmin 		: !!user.admin,
	        		gravatarUrl 	: user.gravatarUrl
	        	}
	    	});
		});
	},

	// EASYMONEY DRAFTBOARD
	showEasymoneyDraftboardPage: function(req, res) {

		// If not logged in, show the public view.
	    if (!req.session.me) {
	    	return res.view('homepage');
	    }

	    // Otherwise, look up the logged-in user and show the logged-in view,
	    // bootstrapping basic user data in the HTML sent from the server
	    User.findOne(req.session.me, function (err, user){
	    	if (err) {
	    		return res.negotiate(err);
	    	}

	    	if (!user) {
	    		sails.log.verbose('Session refers to a user who no longer exists- did you delete a user, then try to refresh the page with an open tab logged-in as that user?');
	    		return res.view('homepage');
	    	}

	    	return res.view('easymoneyDraftboard', {
	    		me: {
	    			id 				: user.id,
	        		firstName 		: user.firstName,
	        		lastName 		: user.lastName,
	        		email 			: user.email,
	        		teamName 		: user.teamName,
	        		isAdmin 		: !!user.admin,
	        		gravatarUrl 	: user.gravatarUrl
	        	}
	    	});
		});
	},
};
