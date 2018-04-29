const fs = require('fs');
const path = require('path');
const outputDir = path.resolve('./build-server');

module.exports = {

  entry: path.resolve(__dirname, './app/server.js'),

  output: {
	path: outputDir,
	filename: 'server.bundle.js'
  },

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
	'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
	ext[mod] = 'commonjs ' + mod
	return ext
  }, {}),

  node: {
	__filename: true,
	__dirname: true
  },

	module: {
		rules: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'babel-preset-env',
                            'babel-preset-react',
                            'stage-2'
						]
					}
				}   
			}
		]
	}

}
