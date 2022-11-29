const gulp = require('gulp')
const { series, parallel } = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

function tarefaCSS(cb) {
         gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
            .pipe(concat('libs.css'))
            .pipe(cssmin())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('./dist/css'))

        return cb()
}

function tarefasJS(cb) {
         gulp.src('./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
            .pipe(babel({
                comments: false,
                presets: ['@babel/env']
            }))
            .pipe(concat('libs.js'))
            .pipe(uglify())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('./dist/js'))

        return cb()
}

//gulp nao reconhece esta função devido node nao converte-la de COMMOMJS para ES6.
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

function tarefasHTML(cb) {

        gulp.src('./src/**/*.html')
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(gulp.dest('./dist'))
        
        return cb()
            
}


//função para atualizar a pasta dist de forma automatica e sincronizada
gulp.task('serve', function(){
        browserSync.init({
            server: {
                baseDir: "./dist"
            }
        })
        gulp.watch('./src/**/*').on('change', process)
        gulp.watch('./src/**/*').on('change', reload)
})

const process = series( tarefasHTML, tarefaCSS, tarefasJS )

exports.styles = tarefaCSS
exports.scripts = tarefasJS

exports.default = process