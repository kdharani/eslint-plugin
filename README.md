# eslint-plugin-my-custom-rules

custom eslint rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-my-custom-rules`:

```
$ npm install eslint-plugin-my-custom-rules --save-dev
```


## Usage

Add `my-custom-rules` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "my-custom-rules"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "my-custom-rules/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





