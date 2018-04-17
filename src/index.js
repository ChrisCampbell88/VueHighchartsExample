
/* Index JS
 * --------
 * This file is the webpack entry point.
 */

'use strict';

// Polyfill's for ie11
import 'babel-polyfill';
import 'es6-promise/auto';

// Bootstrap 4
import './libs/bootstrap/bootstrap';

// Components
import './components/app/app';

// Project JS (basic non vue js)
import './js/general.js';

// Libs
import './libs/icons/icons';
import './libs/_visible-breakpoints.scss';
