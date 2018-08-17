import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {

	plugins: [
        resolve(),
		babel({
            babelrc: false,
            presets: [['env', { modules: false }]]
        })
	],

	input: "index.js",

	output: {
		file: "dist/myLib.js",
		format: "umd",
		name: "myLib"
	}

};