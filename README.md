# eslint-plugin-my-custom-rules

custom eslint rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-protractor-custom-rules`:

```
$ npm install eslint-plugin-protractor-custom-rules --save-dev
```


## Usage

Add `protractor-custom-rules` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "protractor-custom-rules"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "missing-assertion": 2,
        "no-browser-sleep-test":2,
        "no-explicit-element":2,
        "no-literal":2,
        "no-protractor-commands":2,
        "no-implicit-wait":1
    }
}
```

## Supported Rules

* missing-assertion
* no-browser-sleep-test
* no-explicit-element
* no-literal
* no-protractor-commands
* no-implicit-wait





