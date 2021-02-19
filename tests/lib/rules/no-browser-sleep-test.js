/**
 * @fileoverview Don&#39;t use browser sleep in test code
 * @author kannan
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-browser-sleep-test"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({ parser: require.resolve('@typescript-eslint/parser') });
ruleTester.run("no-browser-sleep-test", rule, {

    valid: [

        'SomeObject.sleep(10);',
        'browser.wait(EC.visibilityOf(elm), 5000, "Message");',
        'browser.sleep(2000)',
        'await browser.sleep(2000)'
    ],

    invalid: [
        {
            code:  "it('Test description', async function () { await browser.sleep(2000); })",
            errors: [{
                message: "Don't use browser sleep in test code",
                type: "MemberExpression"
            }]
        },
        {
            code: "it('Test description', async function () { browser.sleep(2000); })",
            errors: [{
                message: "Don't use browser sleep in test code",
                type: "MemberExpression"
            }]
        }
    ]
});
