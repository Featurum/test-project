var SvgStore = require('webpack-svgstore-plugin');

module.exports = {
	devServer: {
	    compress: true,
	    port: 9000
	},
	pages: {
    	index: {
			// точка входа для страницы
			entry: 'src/main/main.js',

			// исходный шаблон
			template: 'public/index.html'
    	}
	},
	configureWebpack: {
    	plugins: [
		    new SvgStore({
		      	svgoOptions: {
		        	plugins: [
		            	{
		                	removeTitle: true,
		                	removeUselessStrokeAndFill: false
		            	}
		        	]
		      	},
		      	prefix: ''
		    }),
	  	]
	}
}