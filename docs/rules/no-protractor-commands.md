# Test should not have protractor commands (no-protractor-commands)

Discourage the use of click(), sendkeys() in tests


## Rule Details

This rule aims to warn if any webdriver / protractor commands are used in tests

Examples of **incorrect** code for this rule:

```js

    it('Test description', async function () {

        let ele = element(by.xpath('person.name'));
      	element.all(by.css('.items li'));
      	ele.click();

    })

```

Examples of **correct** code for this rule:

```js

    it('Test description', async function () {
        ...
        await vetsAddPage.navigate();
        await vetsAddPage.addVet(data.vets);
        ...

    })

```

## When Not To Use It

Protractor commands should not be used in tests. Best practice is to have protractor commands in Base or Page

## Further Reading
