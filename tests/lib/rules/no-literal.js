/**
 * @fileoverview Disallow the literal in code
 * @author kannan
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-literal"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({ parser: require.resolve('@typescript-eslint/parser') });
ruleTester.run("no-literal", rule, {

    valid: [

        "await vetsPage.deleteVet(data.vets);"
    ],

    invalid: [
        {
            code: "await ownersPage.selectOwner('John');",
            errors: [{
                message: "unexpected literal found",
                type: "Literal"
            }]
        }
    ]
});
