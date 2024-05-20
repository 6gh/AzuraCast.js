# AzuraCast.js

A wrapper to help you interact with the AzuraCast API

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

client.Stations.getAll()
  .then((stations) => {
    // list all the stations in the instance
    console.log(stations);
  })
  .catch((err) => {
    console.error("Something went wrong!", err);
  });
```
