const path= require('path');

module.exports = {

    mode:"development",
    devtool:"source-map",
    entry:{
        app:"./src/app/app.module.js",
        appconfig: "./src/app/app.config.js"
    },
    output:{
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules:[
            {
                test: /\.html$/,
                use: {
                    loader:"html-loader"
                }
                    
                
            },{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader:"babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
        
    },
    devtool: 'source-map'
}