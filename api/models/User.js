/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {

		// The user's first name
		firstName: {
			type: 'string',
			required: true
		},

		// The user's last name
		lastName: {
			type: 'string',
			required: true
		},

		// The user's Team Name
		teamName: {
			type: 'string'
		},

		// The user's email address
		email: {
			type: 'string',
			email: true,
			required: true,
			unique: true
		},

		// The encrypted password for the user
		// e.g. asdgh8a249321e9dhgaslcbqn2913051#T(@GHASDGA
		encryptedPassword: {
			type: 'string',
			required: true
		},

		// The timestamp when the the user last logged in
		// (i.e. sent a username and password to the server)
		lastLoggedIn: {
			type: 'date',
			required: true,
			defaultsTo: new Date(0)
		},

		draftSelections: {
			collection: 'DraftSelection',
			via: 'owner'
		},

		// url for gravatar
		gravatarUrl: {
			type: 'string'
		}

	}
};

