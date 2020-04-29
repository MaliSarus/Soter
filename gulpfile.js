const
    gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    browserSync   = require("browser-sync").create(),
    del           = require('del'),
    cache         = require('gulp-cache'),
    autoPrefixer  = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat');

function gulpSass() {
    return gulp
        .src('./src/assets/scss/**/*.scss')
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(autoPrefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./src/assets/css'))
        .pipe(browserSync.stream());
}

// function gulpBabel() {
//     return gulp
//         .src('src/assets/**/script.js')
//         .pipe(sourcemaps.init())
//         .pipe(babel({
//             presets: ['@babel/env']
//         }))
//         .pipe(concat('main.js'))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('./src/assets/js'))
//         .pipe(browserSync.stream());
// }

function startServer(done) {
    browserSync.init({
        proxy: "soter"
    });
    done();
}

function clean() {
    return del(["dist"]);
}

function clear() {
    return cache.clearAll();
}

function reload(done) {
    browserSync.reload();
    done();
}

function watchFiles(done) {
    gulp.watch('./src/assets/scss/**/*.scss', gulp.parallel(gulpSass));
    gulp.watch('./src/assets/css/**/*.css', gulp.parallel(reload));
    gulp.watch("./src/**/*.html", gulp.parallel(reload));
    gulp.watch("./src/**/*.php", gulp.parallel(reload));
    gulp.watch('./src/assets/js/**/script.js', gulp.parallel(reload));
    done();
}

gulp.task('default',gulp.parallel(watchFiles, startServer));

exports.clean = clean;
exports.clear = clear;