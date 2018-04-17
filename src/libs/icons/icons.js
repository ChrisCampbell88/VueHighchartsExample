
/* SVG Icon spritesheet loader
 * ===========================
 * Injects a .svg file into the page, we do this via JS rather than embed into
 * the markup / templates as it caches much nicer.
 *
 * For a full explanation see: https://css-tricks.com/ajaxing-svg-sprite/
 */

// Import the SVG Icons, these are handled by 'webpack-svgstore-plugin' in the
// build/webpack.common.js file
/* eslint-disable-next-line no-unused-vars */
const __svg__ = {
    path: './svg/*.svg',
    name: 'icons.svg',
};

// Import the base icon styles
import './_icons.scss';

// // When the page is loaded, fetch the spritesheet and inject it into the DOM
// $.get('/dist/icons.svg', function(data) {
//     let div = document.createElement('div');
//     div.className = 'icons-svg';
//  div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
//     document.body.insertBefore(div, document.body.childNodes[0]);
// });
