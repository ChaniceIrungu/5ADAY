This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Introduction

The app is designed for users who wants to eat better and have a better lifestyle. The users are able to track their nutritions and calories with the choosen ingredients, and they will also get a recipe and tips to have to be able to relax and improve their lifestyle. Feature will include a dashboard where the users can save the nutrition and calories data, and a shopping list that allow users to add groceries to shopping list manually

## Available Scripts

In the project directory, you can run:

### Dependencies

Run yarn on root folder to install dependencies related to Express.

cd client and run yarn install dependencies related to React.

### Run Your Development Servers

Run yarn start in project directory to start the Express server on port 5000.

cd client and run yarn start to start the client server.

Open http://localhost:3000 to view the client in the browser.

Open http://localhost:5000 to view the data in the browser.

### Database layout

DO NOT NPM MIGRATE, IT WILL DELETE THE TABLE CREATED

table called seasons(id INT NOT NULL AUTO_INCREMENT, image VARCHAR(255) NOT NULL, title VARCHAR(255) NOT NULL, description VARCHAR(1000) NOT NULL, list VARCHAR(1000)NOT NULL, PRIMARY KEY (id))



### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
