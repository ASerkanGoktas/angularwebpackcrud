const path= require('path');

module.exports = {

    mode:"development",
    devtool:"inline-source-map",
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
                use: {
                    loader:"html-loader"
                }
                    
                
            }
        ]
    }
}