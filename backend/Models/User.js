const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		fName: {
			type: String,
		},
		lName: {
			type: String,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = User = mongoose.model("User", UserSchema);
