var less = require('less');
// var origin = require('./input/variable.less')
var fs = require('fs');
var dirname = '函数手册/杂项函数';
var preName = 'index';
var origin = fs.readFileSync('./'+dirname+'/input/'+ preName+ '.less','utf8')
// console.log(origin)
less.render(origin,
    {
      paths: ['.', './函数手册/杂项函数/input'],  // Specify search paths for @import directives
      filename: 'style.less', // Specify a filename, for better error messages
      compress: false,          // Minify CSS output
      sourceMap: {sourceMapFileInline: true}
    },
    function (e, output) {
        fs.writeFileSync('./'+dirname+'/output/'+preName+'.css',output.css);
        // console.log(output)
       console.log(output.css);
    });