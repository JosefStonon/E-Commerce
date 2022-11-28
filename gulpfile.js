const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')

function tarefaCSS(cb) {
    return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
            .pipe(concat('libs.css'))
            .pipe(cssmin())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('./dist/css'))
}

function tarefasJS(cb) {
    return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
            .pipe(concat('libs.js'))
            .pipe(uglify())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('./dist/js'))
}

//gulp nao reconhece esta função devido node atual nao converte-la de COMMOMJS para ES6.
// function tarefasIMG(){                
    
//    return src('./src/image/*')
//      .pipe(image({
//            pngquant: true,
//            optipng: false,
//            zopflipng: true,
//            jpegRecompress: false,
//            mozjpeg: true,
//            gifsicle: true,
//            svgo: true,
//            concurrent: 10,
//           quiet: true
//       }))
//        .pipe(dest('./dist/images'))
//    }

exports.styles = tarefaCSS
exports.scripts = tarefasJS