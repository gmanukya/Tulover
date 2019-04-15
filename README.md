# Tulover

![Alt text](./public/img/tuloverLogo.jpg)

Tulover is a very simple stock-management platform for small organizations. It tracks how many shares each stockholder has, and it can display this data back to the user in form of a graph for simplicity.

## Built with

* **Backend**: Node with Apollo 
* **Frontend**: React with Apollo 

## Install dependencies

Backend
```js
cd server && yarn
```

Frontend
```js
cd client && yarn
```

## Run

Backend
```js
cd server && yarn start
```
Frontend
```js
cd client && yarn start
```

## Test

Backend
```js
cd server && yarn test
```

## Future Enhancements

- Use of a real database and improvements should be done on the API
- Better usage of the cache to limit queries
- Making the app more maintainable by making sure to use same patterns, better code style, more tests, etc...
- User authentication and management
- Authorizations
- Input validation
- More UI/backend tests and Error handling
- Better responsiveness and mobile view support
- Adding more precision to the graph for better visualisation
- Better way to handle the sidebar and header wrapper for the routes and utilizing them...
- More features (stockholders sorting and filtering, )
- Create a proper CI/CD Pipeline
