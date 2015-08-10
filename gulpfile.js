var gulp        = require('gulp');
var mocha       = require('gulp-mocha');
var util        = require('gulp-util');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var babel       = require('babel/register');
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
  .pipe(gulp.dest('dist'))
  .on('error', util.log);
});

gulp.task('test', ['build'], function () {
  return gulp.src(['test/**/*.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec',
      compilers: { js: babel }
    }))
    .on('error', util.log);
});

gulp.task('serve', function () {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
});

gulp.task('watch', ['build','serve'], function () {
  gulp.watch("./src/**/*" , ['build','test']);
  gulp.watch("./test/**/*", ['build','test']);
  gulp.watch("./dist/**/*", ['reload']);
});

gulp.task('reload', function () {
  browserSync.reload()
});

