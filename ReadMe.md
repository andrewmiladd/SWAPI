# SWAPI API

This a Backend project for fetching movies and people from SWAPI
server port = 3000

## Scripts to run
- to install all dependnecies: npm i || yarn
- to run server : npm run start || npm run start:dev(production mood)
- to build the project : npm run build
- to test project : npm run test

## All Dependencies used for this project:
- "body-parser": is for middleware.
- "cors": is a node. js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- "express": Expressjs server for server side implementation
- "jasmine": for unit testing
- "node-fetch": a nodejs kibrary for using the fetch mehtod
- "supertest": library that helps for testing APIs.
- "nodemon": develop node. js based applications by automatically restarting the node application when file changes in the directory are detected.
- "rimraf": executable that is used to clean the installed node packages in a node based project
- "ts-node": is Typescript execution engine , it helps for executing TypeScript files without compinling it to Javascript.
## APIs enpoints
- http://localhost:3000/api/movies: to get All movies
-  http://localhost:3000/api/movies/:id : to get a specefic movie/
- http://localhost:3000/api/people : to get all people details
- http://localhost:3000/api/people/:id : to get a specefic person details
