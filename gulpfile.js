const gulp = require('gulp')
const postcss = require('gulp-postcss')

gulp.task('css', function() {
  return gulp.src('src/main.css')
    .pipe(postcss([
      require('autoprefixer')({
        browsers: ['last 2 version', '> 2%']
      }),
      require('cssnano') //壓縮css
    ]))
    .pipe(gulp.dest('dest/main.css'))
})
