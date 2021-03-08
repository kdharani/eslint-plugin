/**
 * @fileoverview Discourage the use of element(by.css(&#39;css-locator&#39;)) in protractor test. Instead define element in pageobject
 * @author kannan
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-explicit-element"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({ parser: require.resolve('@typescript-eslint/parser') });
ruleTester.run("no-explicit-element", rule, {

    valid: [

        " it('Test Description', async function () { await vetsPage.navigate();})",
    ],

    invalid: [
        {
            code: "it('Test description', async function () { await element.all(by.css('.table.table-striped tr td div')); })",
            errors: [{
                message: "unexpected element() call in test",
                type: "Identifier"
            }]
        }
    ]
});
