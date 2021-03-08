/**
 * @fileoverview Test should not have protractor commands
 * @author kannan
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-protractor-commands"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({ parser: require.resolve('@typescript-eslint/parser') });
ruleTester.run("no-protractor-commands", rule, {

    valid: [

        "await vetsAddPage.navigate();",
        "await vetsAddPage.addVet(data.vets);"
    ],

    invalid: [
        {
            code: "it('Test description', async function () {let ele = element(by.xpath('person.name'));  ele.click();})",
            errors: [{
                message: "No protractor commands in test",
                type: "CallExpression"
            }]
        }
    ]
});
