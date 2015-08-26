# react-es6-watchify

Skeleton project for developing new applications with React with ES6 and SASS

Browserify, Babel and Grunt are used for lightening fast compilation and livereload on changes with targethtml for dynamic view generation.


## Usage

Intially you will have to install all NPM modules

    npm install
    
You'll also need grunt-cli for running grunt from the command line

    npm install -g grunt-cli

The default grunt task will build everything

    grunt
    
There are two watchers available designed to be run simultaniusly on seperate terminals; one is for Eslint and the other for rebuilding and reloading the page.

    grunt watch:eslint

    grunt watch-all

## Project Structure

Project structure is faily simple, all source files are inside source, with scripts and styles having their own folders. Scripts is again split up into app and libs.

The built project is put into the build directory and not commited.
