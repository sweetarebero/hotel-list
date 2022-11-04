# Getting Started with Hotel List App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![](http://g.recordit.co/KkmUcDbenl.gif)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run serve`

Launches mock server on port 4000 (http://localhost:3000) uses json server

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Steps to follow to run this app

run following commands:

```
npm run server (start mock server)
npm start (start hotel-list app)
npm run test (test cases)
```

## Task details and assumption

As a user of Qantas Hotels I would like to see a list of hotels that can be sorted by price.

**Sorting options implemented:**

- Price (high-low)
- Price (low-high)

**Assumptions and Tradeoffs:**

- City assumed as constant to be "Sydney"
- Styling is not pixel-perfect (as mentioned in task instructions)
- Have done minimal responsive design (mobile design was not provided)
- Rating (starts or circles) work only on latest browsers that support css variables
  Leveraging on this instruction "You can assume this app to only be run in modern browsers (Chrome, Safari, Firefox) supporting recent features"
- Minimal test cases written (Jest mock for UseAxios hook isn't working), can be found in each component folder
- For sorting I have used `lodash`, it could also be written in a manual function like below, but I would rather not reinventing the Wheel.
  ```
  objs.sort((a,b) => a.objProperty - b.objProperty);
  ```
- I have not used any currency converter, wasn't sure if that was required.
- Error Boundary has been written to catch any JS errors
- When running test case ignore the warning of ErrorBoundary test, its due to throw Error ( couldn't fix in time)

## Project structure

**(highlighting important project files)**

```
src
│   README.md
│   App.tsx  (basic layout)
│
└───components
│   │   ErrorBoundary
│   │   Header (generic header with logo)
|   |   HotelCount (hotel list size with city)
|   |   HotelList (hotel list)
|   |   Hotels (wrapper with SortProvider)
|   |   Layout (generic app layout)
|   |   Rating (Star or Circular rating)
|   |   SortHotels (sorting dropdown)
|   |   SortProvider (context to share selected sort option)
│   │
│   └───data
│   |   │   data.json
│   |
|   └───images
|   |   |   qantas-logo.png
|   |
│   └───models
│   |   |   global.ts (global types/constants)
|   |   |   hotel.ts (data response types)
│   |
|   └───utils
|       |   sentenceCase.ts (string formatter)
|       |   sortHotelByPrice.ts (price sorting function)
```
