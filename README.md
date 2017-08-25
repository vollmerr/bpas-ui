# BPAS UI [![Build Status](https://travis-ci.org/vollmerr/bpas-ui.svg)](https://travis-ci.org/vollmerr/bpas-ui)

[bpas-ui](https://github.com/vollmerr/bpas-ui) is for common react components used in BPAS projects. It uses [Create React App](https://github.com/facebookincubator/create-react-app) as its foundation, and is based off the [California State Template for styling](http://beta.template.webtools.ca.gov/sample/).

Try it out at [https://vollmerr.github.io/bpas-ui](https://vollmerr.github.io/bpas-ui)!

## Quick Start

If adding to an exisiting project skip steps 1-3.

1. Install create-react-app if not already installed

```
npm i -g create-react-app
```

2. Create a new project

```
create-react-app <appName>
cd <appName>
```

3. Eject out of the default build

```
npm run eject
```

4. Create the following file structure in /src:
```
actions/        (if redux)
constants/
components/
containers/
    index.js
reducers/       (if redux)
    index.js
store/          (if redux)
    configureStore.js
    initalState.js
index.js
```

5. Add the version numbering.
* Open /config/env.js
* under the 'PUBLIC_URL' definition in getClientEnvironment add

```
VERSION: `${NODE_ENV === 'P' ? 'P' : 'D'}.${new Date().toISOString("en-US").substring(0,10).replace(/-/g, '.')}`,
```

6. Add links/routing and a title. For example in /src/containers/index.js

```
import React, { Component } from 'react';
import { Page } from 'bpas-ui';

import { Switch, Route, Redirect } from 'react-router-dom';

const Page1 = () => <h2>Page 1 Test</h2>;
const Page2 = () => <h2>Page 2 Test</h2>;

class App extends Component {
  render() {
    const title = 'Test Page Title';
    const links = [
      {text: 'Test Home', href: '/', icon: 'home'},
      {text: 'Test page 2', href: '/Page2', icon: 'favorite'},
      {text: 'Test redirect', href: '/Page3', icon: 'gear'},
    ];

    return (
      <Page 
        title={title}
        links={links}
      >
        <Switch>
          <Route exact path="/" component={Page1} />
          <Route exact path="/page2" component={Page2} />
          <Redirect to="/" />
        </Switch>
      </Page>
    );
  }
}

export default App;
```

7. In /src/index.js wrap the app in the router and redux

```
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers';

const store = configureStore();

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>, 
  document.getElementById('root')
);
```

8. Add the base store configuration in /src/store/configureStore.js

```
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

export default function configureStore(initialState) {

    const middleWares = [
        thunkMiddleware,
    ];

    const enhancer = composeEnhancers(applyMiddleware(...middleWares));

    return createStore(rootReducer, initialState, enhancer);
}
```

9. Add the root reducer (initally just redux-form) in /src/reducers/index.js

```
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  form,
});

export default rootReducer;
```

10. Run the application (should automatically open at [localhost:3000](http://localhost:3000))

```
npm start
```

## Roadmap

The following features will be added in the future:
* Scripts for automating tasks, including setting up an inital project (with and without redux, etc)
* Themeing options
* Remove bootstrap dependencies
* Remove stylesheet (.css) dependencies
* Add TypeScript support
* Add mapping to constants
* More components...
* Optional dependencies (redux, etc)
* Make a better roadmap.....
* Add code climate
