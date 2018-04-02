var less = require('less');
// var origin = require('./input/variable.less')
var fs = require('fs');
var dirname = '语言特性/Combinatorial Explosion';
var preName = 'index';
var origin = fs.readFileSync('./'+dirname+'/input/'+ preName+ '.less','utf8')
// console.log(origin)
less.render(origin,
    {
      paths: ['.', './语言特性/Import Directives/input'],  // Specify search paths for @import directives
      filename: 'style.less', // Specify a filename, for better error messages
      compress: false          // Minify CSS output
    },
    function (e, output) {
        fs.writeFileSync('./'+dirname+'/output/'+preName+'.css',output.css)
       console.log(output.css);
    });