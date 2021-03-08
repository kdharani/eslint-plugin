# Avoid using implicit waits. Use explicit waits instead. (no-implicit-wait)

Don't use implicit wait 'browser.manage().timeouts().implicitlyWait()' in the code. Use ExpectedCondition predicate to wait for the expected condition to arrive.


## Rule Details

This rule aims to warn if implicit wait is set in the config file or code.

Examples of **incorrect** code for this rule:

```js

onPrepare: function(){
    browser.manage().timeouts().implicitlyWait(5000);
}

```

Examples of **correct** code for this rule:

```js

    it('Test description', function () {
        console.log('START');
        // browser.sleep(timeOut);
        browser.wait(protractor.ExpectedConditions.presenceOf(search), timeOut);
    });

```

## When Not To Use It

Don't mix implicit and explicit waits. If you prefer to use implicit over explicit then turn off this rule. But it is recommanded to use explicit over implicit wait. 

## Further Reading

http://elementalselenium.com/tips/47-waiting
