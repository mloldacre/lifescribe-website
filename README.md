# LifeScribe

## What is LifeScribe?

LifeScribe is an online web journal application in which users are able to log in and enter their thoughts (scribbles) and review them by day and time entered!

## Prerequisites
Lifescribe requires Node.js 12.18+ to run.

## Installing
Lifescribe requires Node.js 12.18+ to run. Install the dependencies and devDependencies then start the server.

    npm install

## Running The Tests
To run front-end or back-end tests, simply run `npm t` in the terminal.

## Schema
	

### User

    {
	    id: {
		    type: Integer,
		    required: true,
		    unique: true
		    },
		first_name: {
		    type: Text,
		    required: true,
		    unique: false
		    },
		last_name: {
		    type: Text,
		    required: true,
		    unique: false
		    },
		 username: {
		    type: Text,
		    required: true,
		    unique: true
		    },
		 password: {
		    type: Text,
		    required: true,
		    unique: false
		    },
		 email: {
		    type: Text,
		    required: true,
		    unique: true
		    },
		 date_created: {
		    type: TimestampTZ,
		    required: true,
		    unique: false,
		    default: TimestampTZ.now
		    },
		 date_modified: {
		    type: TimestampTZ,
		    required: false,
		    unique: false
		    },
    }

### Scribe
	{
		id: {
		    type: Integer,
		    required: true,
		    unique: true
		    },
		date_created: {
		    type: Date,
		    required: true,
		    unique: false,
		    default: Date.now
		    },
		user_id: {
			 type: id,
			 ref: User
		 }
	}
 
 ### Scribble

     {
    	id: {
		    type: Integer,
    		required: true,
    		unique: true
    		},
    	date_created: {
		    type: Date,
		    required: true,
		    unique: false,
		    default: Date.now
		    },
		time_created: {
		    type: TimestampTZ,
		    required: true,
		    unique: true,
		    default: TimestampTZ.now
		    },
		 scribble_type: {
		    type: Integer,
    		required: true,
    		unique: false
    		},
    	scribble_content: {
		    type: Text,
    		required: true,
    		unique: false
    		},
    	scribe_id: {
			 type: id,
			 ref: Scribe
		 },
		 user_id: {
			 type: id,
			 ref: User
		 }
    }

## API Overview

    /api
    .
    |__/auth
	|    |__POST
	|	    |__/login
	|
	|__/users
	|	|__GET
	|	|__POST
	|	|__PATCH
	|	|__DELETE
	|		|__/
	|
	|__/scribes
	|	|__GET
	|	|__GET /scribbles
	|	|__GET /currentScribe
	|	|__POST
	|		|__/
	|
	|__/scribbles
		|__GET
		|__GET /for_scribe/:scribe_id
		|__GET 
		|__PATCH
		|__DELETE
			|__ /:scribble_id
		|__POST
			|__ /
### POST `/api/auth/login`	

    //req.body
    {
	    user_name: String
	    password: String
    }
    // res.body
    {
	    authToken: {$token}
    }
    

### GET  `/api/users`	
### POST `/api/users`

    //req.body
    { 
		first_name: String
	    last_name: String
	    email: String
	    password: String
	    user_name: String
    }
    //res.body
    {
	    
    }
        

### PATCH `/api/users`
### DELETE `/api/users`	
### GET `/api/scribes`	
### GET `/api/scribes/scribbles`	
### GET `/api/scribes/currentScribbles`
### POST `/api/scribes`
### GET `/api/scribbles`
### GET`/api/scribbles/for_scribe/:scribe_id`
### GET`/api/scribbles/:scribble_id`
### PATCH`/api/scribbles/:scribble_id`
### DELETE`/api/scribbles/:scribble_id`
### POST`/api/scribbles/`



> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbNjAxMjI3ODQyLDE5MTM1NDQzMiwtNjI2Mz
UxMTQ2XX0=
-->