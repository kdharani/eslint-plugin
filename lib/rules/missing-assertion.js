/**
 * @fileoverview Test should assert something
 * @author kannan
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Test should assert something",
            category: "recommend",
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
            "CallExpression[callee.name='it']"(node) {

                function isAssertPresent() {
                    const identifiers = ['expect', 'should', 'assertion']
                    const sourceCode = context.getSourceCode();
                    const tokens = sourceCode.getTokens(node);
                    for (let i = 0; i < tokens.length; i++) {

                        if (tokens[i].type === 'Identifier' &&
                            identifiers.indexOf(tokens[i].value) > -1) {
                            return true
                        }

                    }
                }

                if (!isAssertPresent()) {
                    context.report({
                        node,
                        message: 'No assertion found in test. Test should have atleast one assertion',
                    });

                }
            }
        };
    }
};
