let mix = require('laravel-mix');

mix.js('src/app.js', 'dist/js')
    .sass('src/scss/main.scss', 'dist/css');