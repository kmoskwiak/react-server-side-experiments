if(process.env.NODE_ENV !== 'production') {
	require('babel-register')({
		ignore: /\/(build|node_modules)\//,
		presets: ['babel-preset-env', 'babel-preset-react', 'stage-2']
	});
}

require('./app/server');
