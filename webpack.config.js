const currentTask = process.env.npm_lifecycle_event 
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fse = require('fs-extra')

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-for'),
  require('postcss-calc'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('postcss-hexrgba'),
  require('autoprefixer')
]

class RunAfterCompile {
  //copies images and creates new folder in dist folder
  apply(compiler) {
    compiler.hooks.done.tap('Copy Images', function(){
      fse.copySync('./app/assets/images', './docs/assets/images')
    })
  }

}

let cssConfig = {
  test: /\.css$/i,
  use: ['css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
}

//this returns an array with all files that end in .html and creates a new instance of HtmlWebpackPlugin plugin to be run on each of them to ensure they have css and js injected in.
let pages = fse.readdirSync('./app').filter(function(file){
  return file.endsWith('.html')
}).map(function(page){
  console.log(page)
  return new HtmlWebpackPlugin({//runs HtmlWebpackPlugin on each page returned in array.
    filename: page, //generates file automatically so can be same name as template, page = whichever file has been looped to index, about etc
    template: `./app/${page}`
  })
})

//Shared config options for both dev and production are in this config object
let config = {
  entry: './app/assets/scripts/App.js',
  plugins: pages,
  module: {
    rules:[
      cssConfig
      //this variable is established here but modified in both dev and production statements, to load css in different ways. Build version uses MiniCssExtractPlugin 
    ]
  }
}

// the current task variable knows which task has been run so if it's dev it modifies the config object with these options.
if(currentTask == 'dev') {
  cssConfig.use.unshift('style-loader')
  config.output = {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  },
  config.devServer = {
    before: function(app, server) {
      server._watch('./app/**/*.html')
    },
    contentBase: path.join(__dirname, 'app'),
    hot: true,
    port: 3000,
    host: '0.0.0.0'
  },
  config.mode = 'development' 
} 

//If it's build then it modifies config object with these:
if(currentTask == 'build') {
  config.module.rules.push({ //pushes new item onto rules array
    test: /\.js$/, //only want rule to apply to js files
    exclude: /(node_modules)/, // ignore node modules files
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  })

  cssConfig.use.unshift(MiniCssExtractPlugin.loader)
  postCSSPlugins.push(require('cssnano'))
  config.output = {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'docs')
  }//this assigns names to js files rather than bundled, also add string to the end that beats browser caches.
  config.mode = 'production'
  config.optimization = {
    splitChunks: {chunks: 'all'}//this creates the vendors file separately.
  }
  config.plugins.push(
    new CleanWebpackPlugin(), //deletes all js files to make sure they're latest versions
    new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}),
    new RunAfterCompile()
    )
} 

module.exports = config