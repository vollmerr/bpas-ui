# BPAS UI

This project is for common react components used in BPAS projects. It uses [Create React App](https://github.com/facebookincubator/create-react-app) as its foundation, and is based off the California State Template for styling.

This is a work in progress. More instructions and components to come!

## Quick Start

1. Install create-react-app if not alreay installed

```
npm i -g create-react-app
```

2. Eject out of the default build

```
npm run eject
```

3. Add the version numbering.
* Open /config/env.js
* under the 'PUBLIC_URL' definition in getClientEnvironment add

```
VERSION: `${NODE_ENV === 'P' ? 'P' : 'D'}.${new Date().toISOString("en-US").substring(0,10).replace(/-/g, '.')}`,
```

* Add the required packages

```
npm i -S bpas-ui styled-components react-router-dom bootstrap@3
```

* Add Bootstrap in index.js by adding the following import

```
import 'bootstrap/dist/css/bootstrap.css';
```
