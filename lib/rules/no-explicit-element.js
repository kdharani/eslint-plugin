/**
 * @fileoverview Discourage the use of element(by.css('css-locator')) in protractor test. Instead define element in pageobject
 * @author kannan
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Discourage the use of element(by.css('css-locator')) in protractor test. Instead define element in pageobject",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "CallExpression[callee.name='it'] CallExpression"(node) {

                let object = node.callee.object
                let property = node.callee.property

                if (object && property && object.name === 'by') {

                    context.report({
                        node: property,
                        message: "Don't use element() in test. Instead define the page elements in page class."
                    })
                }
            }
        };
    }
};
