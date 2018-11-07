# contributes-form

[![Build Status](https://travis-ci.org/overlayed-app/contributes-form.svg?branch=master)](https://travis-ci.org/overlayed-app/contributes-form)
[![Coverage Status](https://coveralls.io/repos/github/overlayed-app/contributes-form/badge.svg?branch=master)](https://coveralls.io/github/overlayed-app/contributes-form?branch=master)

Form for contributes providers ✔️ 

## Why

We need a configuration component that works with [contributes](https://github.com/overlayed-app/contributes) settings. This is that component.

## How

`npm i @overlayed-app/contributes-form`

Then in code (if `jsx`):

```
const ContributesForm = require('@overlayed-app/contributes-form')

// use it as a react component
<ContributesForm sources={['test/package.json']} />

```

or (if `tsx`):

```
import ContributesForm from '@overlayed-app/contributes-form'

// use it as a react component
<ContributesForm sources={['test/package.json']} />
```

## API

The default module exports the react component. The options are as follows:

+ `sources` - an array of paths to json files containing contributes objects
+ `rawSources` - an optional array of contributes object literals
+ `data` - an optional data object, containing existing setting data
+ `completed` - an optional [callback](https://github.com/mozilla-services/react-jsonschema-form#form-submission) that's given the changed setting data

Uses [mozilla-services/react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form) under the hood.

## Contributing

+ To build `npm run build`.
+ To publish `npm run publish`.
+ To test `npm test`.

## Authors

Ben Greenier - Initial work - [bengreenier](https://github.com/bengreenier)

## License

Contributes is licensed under the MIT License - [Click here for details](https://github.com/overlayed-app/contributes/blob/master/LICENSE)