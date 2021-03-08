/**
 * @fileoverview Avoid using implicit waits. Use explicit waits instead.
 * @author kannan
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-implicit-wait"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({ parser: require.resolve('@typescript-eslint/parser') });
ruleTester.run("no-implicit-wait", rule, {

    valid: [

        " browser.wait(protractor.ExpectedConditions.presenceOf(search), timeOut);"
    ],

    invalid: [
        {
            code: "browser.manage().timeouts().implicitlyWait(5000);",
            errors: [{
                message: "Avoid using implicit waits. Use explicit waits instead.",
                type: "MemberExpression"
            }]
        }
    ]
});
