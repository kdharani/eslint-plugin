/**
 * @fileoverview Test should not have protractor commands
 * @author kannan
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Test should not have protractor commands",
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
            "CallExpression"(node) {

                const identifiers = [
                    'click',
                    'sendKeys',
                    'getTagName',
                    'getCssValue',
                    'getAttribute',
                    'getText',
                    'getSize',
                    'getLocation',
                    'isEnabled',
                    'isSelected',
                    'submit',
                    'cler',
                    'isDisplayed',
                    'takeScreenShot',
                    'getId',
                    'get',
                    'refresh',
                    'navigate',
                    'pause',
                    'setLocation',
                    'sleep',
                    'getTitle',
                    'getCurrentUrl',
                    'getPageSource',
                    'close',
                    'element'];

                const callee = node.callee.property;
                const object = node.callee.object;
                if (callee || object) {
                    if (identifiers.indexOf(callee.name) > -1 ||
                        identifiers.indexOf(object.name) > -1) {

                        for (let i = 0; i < context.getAncestors().length; i++) {

                            let parent = context.getAncestors()[i]

                            if (parent.type === 'CallExpression' && parent.callee.name == 'it') {
                                context.report({
                                    node,
                                    message: 'No protractor commands in test',
                                });
                                break
                            }
                        }


                    }
                }
            }
        };
    }
};
