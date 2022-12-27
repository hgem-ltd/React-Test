# Restaurant menu app

## Main features
You can browse menu items retrieved from a mock API call. The items
can be added to the shopping basket. The basket shows the items, their quantity (editable), and the total price.
## Stack used
I used Next.JS with Typescript for easy page routing and a type-safe development process. I used Next.JS's CSS modules to keep my styles component-scoped. Only vanilla CSS was used, without any styling libraries.
This approach allows for easy reuse of components along with their isolated styles, which prevents the classnames from clashing.
The state is managed by Zustand (very lightweight library), which allows for easy read/write access to state (menu and basket items) from any component. 
## Testing
I used Cypress (E2E) to test the overall flow of the application from a user's point of view; focusing on the most important features such as adding items to the basket, and editing their quantity. If the app was to get more complex in the future, it would make sense to introduce more isolated component-focused unit/integration tests.   
## Available scripts
### `npm run dev`
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
### `npx cypress open`
Opens Cypress, where you can run the tests in real time.
Please note: if your app started on `localhost:3001` or other, you will need
to change the address that Cypress visits in `cypress/e2e/spec.cy.ts` accordingly. 
