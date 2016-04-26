'use strict';
/// <binding Clean='clean' />

var gulp = require('gulp'),
 sass = require('gulp-sass');
gulp.task('clean', ['clean:css']);


gulp.task('sass', function () {
    return gulp.src('assets/sass/*.scss').
    pipe(sass())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('watch:sass', function () {
    gulp.watch('**/*.scss', ['sass']);
});
