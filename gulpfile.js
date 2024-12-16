const {src, dest, watch, series} = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));

function images(){
    return src('./src/img/**/*')
        .pipe( imagemin( {optimizationLevel : 3} ) )
        .pipe( dest('./build/assets'))
}

function css(){
    return src( './src/scss/app.scss')
        .pipe( sass() )
        .pipe( dest('build/css') );
}


function dev(){
    watch('./src/img/**/*', images);
    watch('./src/scss/**/*.scss', css)
}


exports.dev = dev;
exports.default = series( images, css, dev);