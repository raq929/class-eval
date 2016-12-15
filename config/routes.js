'use strict';

module.exports = require('lib/wiring/routes')

// create routes

// what to run for `GET /`
.root('root#root')

// standards RESTful routes
.resources('examples')

// users of the app have special requirements
.post('/sign-up', 'users#signup')
.post('/sign-in', 'users#signin')
.delete('/sign-out/:id', 'users#signout')
.patch('/change-password/:id', 'users#changepw')
.resources('users', { only: ['index', 'show'] })
.patch('/make-admin/:id', 'users#createAdmin')
.patch('/disable-admin/:id', 'users#disableAdmin')

// roster routes
.resources('students')
.resources('rosters')
.patch('/rosters/:id/add-instructors', 'rosters#addInstructor')
.patch('/rosters/:id/remove-student', 'rosters#removeStudent')
.patch('/rosters/:id/remove-instructor', 'rosters#removeInstructor')
// all routes created
;
