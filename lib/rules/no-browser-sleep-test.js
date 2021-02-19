/**
 * @fileoverview Disallow use of browser.sleep in tests
 * @author kannan
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Don't use browser sleep in test code",
            category: "recommend",
            recommended: true
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "CallExpression[callee.name='it'] MemberExpression" (node) {

              if (node.object.name === 'browser' && node.property.name === 'sleep') {
               
                  context.report({
                  node,
                  message: "Don't use browser sleep in test code",
                });
                     
              }
            },
          };
    }
};
