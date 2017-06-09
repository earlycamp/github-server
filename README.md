# githubServer

### CONTENTS
* [Introduction](#introduction)
* [Commands](#commands)
* [Configuration](#configuration)
* [Testing](#testing)

#### Introduction
----
githubServer gets and serves content from a repository.


#### Commands
----
Here is a table describing the commands used in this application:

| Function      | Description          				 					 	|
|---------------|-----------------------------------------------------------| 
| `npm install` | installs all dependecies needed by the application 		| 
| `npm test`  	| runs mocha tests that test the application's functionality|
| `npm start` 	| starts the application on port 3000      					|


#### Configuration
----
- To configure the application, navigate to the config directory in your local repo.
- Run `cp config/development.example.js config/development.js`
- Fill out all fields in config/development.js
- run `npm install`, to set up all the requirements needed by the application.

The application retrieves content from the repo using githubApi. The API is called from the github.js file that calls the function and is run by the server.js.

After all requirements have been setup, run `npm start` to start the application.
Navigate to your browser. The aplication should be listennig on PORT 3000.


#### Testing
----
- All the functionalities on the application have been tested if they exist and function, using mocha.
- open your terminal and run `npm test`
- You should see that all the tests pass successfully.
