#Project Description
  

server folder - server side code

-server.js

-Procfile [to run on heroku]

-config folder

    -auth.js
    
    -database.js
    
-route folder

    -apiRoute [api call to db for user details]
    -loginRoute
    -RegisterRoute
    
src Folder - client side
-app
    -auth folder [to implement CANActivate on page that gives user list : This code is currently commented so that session based authorisation can be seen on the api routes]
    -employee Page component
    - login page coomponent
    - registration page component

#Route Authorisation- SessionID based auth is implemented. Passwords are hashed and salted using bcrypt. JWT is not implemented. JWT is usually implemented when we receive a token from some external authorisation (eg ping federate or Open ID). JWT sign could have been used to store user info in cookie and set expiry for session.Not implementing it here as user info is not being stored and it is not required. Here session Id is stored in cookie and expiry is set to 1 min. 

# Antarctica

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

## Development server

Run 'npm start' to start server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
"# antarcticaGlobal" 
