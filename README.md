# iso4217-js
Check valid codes for https://www.xe.com/iso4217.php

## Example:
```js
const ISO4217 = require("iso4217");

const type = ISO4217.isCurrencyCode("USD");

// type === "United States Dollar"
```
