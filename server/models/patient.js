const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
	firstname: {
		type: String,
		required: true,
		trim: true
	},
	middletname: {
		type: String,
		trim: true
	},
	lastname: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	age: {
		type: Number,
		required: true
	},
	password: {
		type: String,
		required: true,
		trim: true,
		minLength: 6
	},
});

PatientSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password);
	},
	hashPassword: (plainTextPassword) => {
		return bcrypt.hashSync(plainTextPassword, 10);
	}
};

// PatientSchema.pre("save", function (next) {
// 	console.log("patientSchema.pre('save'): ", this);
// 	if (!this.password) {
// 		console.log("no password!");
// 		next();
// 	} else {
// 		console.log("pre saved");
// 		this.password = this.hashPassword(this.password);
// 	}
// 	next();
// });

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;