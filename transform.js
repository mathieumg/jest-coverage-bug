import babelJest from "babel-jest";

module.exports = babelJest.createTransformer(require("./babelConfig"));
