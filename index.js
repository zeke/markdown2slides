var fs = require('fs')
// var path = require('path')
var marked = require('marked')
var _ = require('lodash')

module.exports = function (filename) {
  var file = fs.readFileSync(filename)
  var html = marked(file.toString('utf8'))

  // <hr> is the slide delimiter
  var slides = html.split("<hr>")

  // Remove empty slides
  slides = _.filter(slides, function(slide){ return slide.length > 0 })

  // Wrap each slide in <li> tags
  slides = _.map(slides, function(slide){ return "<li>" + slide + "</li>" })

  return ("<ol>" + slides.join("") + "</ol>").replace(/\n/g, "")
}