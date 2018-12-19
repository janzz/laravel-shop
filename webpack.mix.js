let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
<<<<<<< HEAD
   .sass('resources/assets/sass/app.scss', 'public/css').version();

=======
   .sass('resources/assets/sass/app.scss', 'public/css')
   .version();
>>>>>>> f4a62c514e9627c7bc4f64d721fb947928a0bf7e
