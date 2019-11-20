# fake-joi

Create a Joi schema as string

# Usage

```js
const Joi = require('fake-joi')
const schema = Joi.object({
  someKey: Joi.number().integer().required()
})

console.log(schema._) // returns schema as string
```
