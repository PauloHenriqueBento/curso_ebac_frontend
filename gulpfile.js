const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate');
const sourcemaps = require('gulp-sourcemaps')

function minImage() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function minifyJS() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

function compileSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

exports.default = function () {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compileSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(minifyJS));
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(minImage));
}