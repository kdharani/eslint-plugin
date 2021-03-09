/**
 * @fileoverview Test should assert something
 * @author kannan
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/missing-assertion"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({ parser: require.resolve('@typescript-eslint/parser') });
ruleTester.run("missing-assertion", rule, {

    valid: [

       " it('Test Description', async function () { expect(await vetsPage.getVetsCount(), 'Vet was not deleted').to.be.equal(vetsCount-1);})"
    ],

    invalid: [
        {
            code: "it('Test description', async function () { await browser.sleep(2000); })",
            errors: [{
                message: "No assertion found in test. Test should have at least one assertion",
                type: "CallExpression"
            }]
        }
    ]
});
