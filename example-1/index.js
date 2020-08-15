//index.js
const validations = require("./validations");

const val1 = validations.userSchema.validate({ username: 'abc', birth_year: 1994 });
console.log("Passou na validação: " + !val1.error);

const val2 = validations.userSchema.validate({});
console.log("Passou na validação: " + !val2.error);