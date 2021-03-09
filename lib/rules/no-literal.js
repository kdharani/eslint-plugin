/**
 * @fileoverview Disallow the literal in code
 * @author kannan
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Disallow the literal in code",
            category: "recommended",
            recommended: true
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
            "ExpressionStatement CallExpression Literal"(node) {
                const identifiers = ['element', 'waitForElementVisible']
                if (node.parent.callee && node.parent.callee.property) {
                    if (identifiers.indexOf(node.parent.callee.property.name) === -1) {
                        context.report({
                            node,
                            message: "Literal is not recommended. Use params instead.",
                        });

                    }
                }
            }
        };
    }
};
