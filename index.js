var fs = require('fs')
var marked = require('marked')

module.exports = function (filename) {
  var file = fs.readFileSync(filename)
  var html = marked(file.toString('utf8'))
  var slides = html
    .split("<hr>")
    .filter(function(slide){ return slide.length > 1 })
    .map(function(slide){ return "<li>" + slide + "</li>" })

  return ("<ol class=\"slides\">" + slides.join("") + "</ol>").replace(/\n/g, "")
}