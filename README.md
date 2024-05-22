# AzuraCast.js

A wrapper to help you interact with the AzuraCast API

> [!WARNING]
> Currently in alpha. Not ready for any deployment

## Install

Install with your favorite package manager:

```console
$ npm install azuracast.js # Install with npm
$ pnpm add azuracast.js # Install with pnpm
$ yarn add azuracast.js # Install with yarn
```

Start by using ES Modules:

```js
import { AzuraCastClient } from "azuracast.js";
```

Or CommonJS:

```js
const { AzuraCastClient } = require("azuracast.js");
```

Declare your client:

```js
const client = new AzuraCastClient({
  apiUrl: "YOUR_API_URL",
  apiKey: "YOUR_API_KEY",
});
```

and start using it!

```js
client.Stations.getAll()
  .then(stations => { ... })
  .catch(err => { ... });
```

## API Coverage

If you'd like to see what API endpoints are currently available to be used with this wrapper, [visit the PROGRESS.md file](PROGRESS.md). Currently the project is in alpha so expect there to not be a lot of coverage, or full support.
