# Blu3 Dapp Helpers

## Installation

```npm
npm install blu3-helpers
```

## Usage

```js
import { Input } from "blu3-helpers";

<Input
  title="Name"
  onChange={e => console.log(e.target.value)}
  error={false}
  errorColor="red"
/>
```
