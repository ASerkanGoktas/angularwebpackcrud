const path= require('path');

module.exports = {

    mode:"development",
    devtool:"source-map",
    entry:{
        app:"./src/app/app.module.js"
    },
    output:{
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules:[
            {
                test: /\.html$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader:"html-loader"
                }
                    
                
            },{
                test: /\.js$/,
                exclude: /(node_modules|bower_components|spec.js$)/,
                use:{
                    loader:"babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use:["style-loader" ,"css-loader"]
                
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name:'[name].[ext]',
                  outputPath:'assets' //the icons will be stored in dist/assets folder
                }
              }
        ],
        
    },
    devtool: 'source-map',
    
}