'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Standard Hello World
Route.get('/', () => {
    return 'Hello, World!';
})

// Generate 1 million item array
Route.get('/array_1m', () => {
    let array = [];

    for (let i = 0; i < 1000000; i++) {
        array.push(i);
    }

    return array;
})

// Generate 1 million item array with concatenate
Route.get('/array_1m_concat', () => {
    let array = [];

    for (let i = 0; i < 1000000; i++) {
        array.push('Current: ' + i);
    }

    return array;
})

// Generate 1 million item array with sum
Route.get('/array_1m_sum', () => {
    let array = [];
    let sum = 0;

    for (let i = 0; i < 1000000; i++) {
        sum += i;
        array.push(sum);
    }

    return array;
})

// Generate 1 million item array reduce
Route.get('/array_1m_reduce', () => {
    let array = [];

    for (let i = 0; i < 1000000; i++) {
        array.push(i);
    }

    return array.reduce((sum, value) => { return sum + value; });
})