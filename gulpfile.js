const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

const imagemin = require('gulp-imagemin');

gulp.task('img', () =>
    gulp.src('assets/images/*/*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/images'))
);

function compileSass(){
    return gulp
        .src("assets/css/scss/*.scss")
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("assets/css"));
}

gulp.task('sass', compileSass);

function watch(){
    gulp.watch('assets/css/scss/*.scss', gulp.series('sass'));
}
gulp.task('watch', watch);
gulp.task('default', gulp.parallel('watch', 'img'));