# AzuraCast.js

A wrapper to help you interact with the AzuraCast API

> [!WARNING]
> Currently in alpha. Not ready for any deployment

## Install

> [!WARNING]
> Does not work. This is just for future reference

Install with your favorite package manager:

```console
$ npm install azuracast.js # Install with npm
$ pnpm add azuracast.js # Install with pnpm
$ yarn add azuracast.js # Install with yarn
```

Start by using ES Modules:

```js
import { AzuraCastClient } from "azuracast.js";

const client = new AzuraCastClient({
  apiUrl: "YOUR_API_URL",
  apiKey: "YOUR_API_KEY",
});
```

Or CommonJS:

```js
const { AzuraCastClient } = require("azuracast.js");

const client = new AzuraCastClient({
  apiUrl: "YOUR_API_URL",
  apiKey: "YOUR_API_KEY",
});
```

## API Coverage

If you'd like to see what API endpoints are currently available to be used with this wrapper, [visit the PROGRESS.md file](PROGRESS.md). Currently the project is in alpha so expect there to not be a lot of coverage, or full support.
