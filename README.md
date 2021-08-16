# Chess Link

The App is live here: _insert-url-here_

# Tech Stack

- Next.js ([docs](https://nextjs.org/docs/getting-started))
- Chess.js - for the game engine ([docs](https://github.com/jhlywa/chess.js/blob/master/README.md))
- Firebase - for hosting ([docs](https://firebase.google.com/docs/hosting))
- Firebase - for db ([docs](https://firebase.google.com/docs/storage))
- SocketIO - for realtime connection between the players and server ([docs](https://socket.io/docs/v4))
- StyledComponents - for dynamic styling ([docs](https://styled-components.com/docs))
- Jest - for unit testing ([docs](https://jestjs.io/docs/))
- React Testing Library - for end to end testing ([docs](https://testing-library.com/docs/react-testing-library/intro/))

# Folder Structure

- **pages** - pages routes to render (frontend)
  - **api** - api routes (backend)
- **components** - global shared/reusable components, such as layout (wrappers, navigation), form components, buttons
- **assets** - global static assets such as images, svgs, company logo, etc.

* **services** - JavaScript modules
* **utils** - Utilities, helpers, constants, and the like
  - **constants** - if we use constants throughout the app we place them here
  - **helpers** - this is global helper functions
* **public** - the public folder (stuff that don't compile)

# Component Structure

- _Component.js -_ The actual React component
- _Component.styles.js_ - The Styled Components file for the component
- _Component.test.js_ - The tests

# Aliases

We are using aliases (who are natively supported by next.js) in this project:

- @pages - _./pages/_
- @components - _./components/_
- @assets - _./assets/_
- @services - _./services/_
- @utils - _./utils/_
- @helpers - _./utils/helpers/_
- @constants - _./utils/constants_

# Version Control

## Branches

This is the conventions we will use for branch names:

In general branches should have a prefix and a name. e.g. _feature/drag-n-drop-pieces_

This the prefixes we will use:

- **main** - this is the most stable version of our app, if we push here it will auto deploy to cloud
- **develop** - main branch for release development
- **hotfix** - urgent fixes for bugs that break the code
- **bugfix** - branches for fixing bugs
- **feature** - branches who implements a feature
- **refactor** - changes the code structure, or naming, etc... if the app function the same after your changes this is the branch prefix for you

## Flows

This how we merge/create/delete branches

- **main** - we _never_ push to this branch we only merge here hotfixes and releases. This branch have a pipeline for auto deploy to cloud.
- **develop** - here we push hotfixes or merge other branches, and we branch form this to make new feature etc...
