# Disallow the use of browser.sleep in tests (no-browser-sleep-test)

Please describe the origin of the rule here.


## Rule Details

This rule aims to find the usage of browser.sleep in test code

Examples of **incorrect** code for this rule:

```js

it('Test description', async function () { 
    
    ...
    await browser.sleep(2000); 
    ...
})

it('Test description', async function () { 
    ...
    browser.sleep(2000); 
    ...
})

```

Examples of **correct** code for this rule:

```js

browser.wait(EC.visibilityOf(elm), 5000, "Message");

browser.sleep(2000);

await browser.sleep(2000);

```

## When Not To Use It

As per Fedex standars, this is a recommanded rule. Disabling it is a bad practice

## Further Reading

https://www.johndpotts.com/2018-12-03-sleep-vs-until-protractor/
