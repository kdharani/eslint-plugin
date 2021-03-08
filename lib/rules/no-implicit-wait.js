/**
 * @fileoverview Avoid using implicit waits. Use explicit waits instead.
 * @author kannan
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Avoid using implicit waits. Use explicit waits instead.",
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
            "ExpressionStatement CallExpression MemberExpression"(node) {

                if (node.property && node.property.name) {
                    if (node.property.name === 'implicitlyWait') {
                        context.report({
                            node,
                            message: "Avoid using implicit waits. Use explicit waits instead.",
                        });

                    }
                }
            }
        };
    }
};
