module.exports = {
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader", },
            },
            {
                test: /\.css$/,
                enforce: 'pre',
                use: ['style-loader', 'css-loader', 'source-map-loader'],
            },
            {
                test: /\.s[a|c]ss$/,
                loader: 'sass-loader!style-loader!css-loader'
            },


            {
                test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    }
};