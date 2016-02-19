'use strict';
require("harmonize")();
var Metalsmith = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    debug = require('metalsmith-debug'),
    metalsmithinplace = require('metalsmith-in-place'),
    metalsmithlayouts = require('metalsmith-layouts');

Metalsmith(__dirname)
    //.use(function(files, metalsmith, done) {
    //  console.log('Files: ');
    //  console.log(files);
    //  console.log();
    //  console.log('Metalsmith: ');
    //  console.log(metalsmith);
    //})
    .use(debug())
    .use(markdown())
    //render templating syntax right inside of a source file
    //  ie -- if using raw html, put some handlebars right in there (??)
    //.use(metalsmithinplace({
    //    'engine':'handlebars',
    //}))
    //put the generated content from above into a layout
    .use(metalsmithlayouts({
        'engine':'handlebars',
        'directory':'templates',
        'includeDir':'layouts/includes'
    }))
    .destination('./build')
    .build(function(err){
        if (err){
            console.log(err);
        }
    });
