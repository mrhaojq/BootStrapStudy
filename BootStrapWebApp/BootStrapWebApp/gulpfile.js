var gulp = require('gulp');

gulp.task('default', function () {

    gulp.src("bower_components/bootstrap/dist/**", { base: 'bower_components' })
        .pipe(gulp.dest('wwwroot/lib'));

    gulp.src("bower_components/jquery/dist/**", { base: 'bower_components' })
        .pipe(gulp.dest('wwwroot/lib'));

    gulp.src("bower_components/jquery-validation/dist/**", { base: 'bower_components' })
        .pipe(gulp.dest('wwwroot/lib'));

    gulp.src("bower_components/jquery-validation-unobtrusive/dist/**", { base: 'bower_components' })
        .pipe(gulp.dest('wwwroot/lib'));

});
