# BPAS UI

This project is for common react components used in BPAS projects. It uses [Create React App](https://github.com/facebookincubator/create-react-app) as its foundation, and is based off the California State Template for styling.

This is a work in progress. More instructions and components to come!

## Quick Start

1. Install create-react-app if not already installed

```
npm i -g create-react-app
```

2. Create a new project

```
create-react-app <appName>
```

3. Eject out of the default build

```
npm run eject
```

4. Add the version numbering.
* Open /config/env.js
* under the 'PUBLIC_URL' definition in getClientEnvironment add

```
VERSION: `${NODE_ENV === 'P' ? 'P' : 'D'}.${new Date().toISOString("en-US").substring(0,10).replace(/-/g, '.')}`,
```

5. Add the required packages

```
npm i -S bpas-ui styled-components react-router-dom bootstrap@3
```

6. Add Bootstrap in index.js by adding the following import

```
import 'bootstrap/dist/css/bootstrap.css';
```

7. Add links/routing and a title. For example in App.js

```
import React, { Component } from 'react';
import { Page } from 'bpas-ui';
import 'bootstrap/dist/css/bootstrap.css';

import { Switch, Route, Redirect } from 'react-router-dom';

const Page1 = () => <h2>Page 1 Test</h2>;
const Page2 = () => <h2>Page 2 Test</h2>;

class App extends Component {
  render() {
    const title = 'Test Page Title';
    const links = [
      {text: 'Test Home', href: '/Page1', icon: 'home'},
      {text: 'Test page 2', href: '/Page2', icon: 'favorite'},
      {text: 'Test redirect', href: '/Page3', icon: 'gear'},
    ];

    return (
      <Page 
        title={title}
        links={links}
      >
        <Switch>
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Redirect to="/page1" />
        </Switch>
      </Page>
    );
  }
}

export default App;
```

Then in index.js wrap the app in the router

```
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);

```

8. Run the application (should automatically open at localhost:3000)

```
npm start
```
