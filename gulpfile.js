var gulp        = require('gulp');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('default', ['build']);

gulp.task('build', function () {
  browserify({
    entries: 'src/game.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('game.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['build'], function () {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });

  gulp.watch("./src/**/*" , ['build']);
  gulp.watch("./dist/**/*", ['reload']);
});

gulp.task('reload', function () {
  browserSync.reload()
});

