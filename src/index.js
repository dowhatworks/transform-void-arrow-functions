module.exports = function voidArrowFunctions({ types: t }) {
    return {
        visitor: {
            UnaryExpression(path) {
                if (
                    path.parent.type === 'ArrowFunctionExpression' &&
                    path.node.type === 'UnaryExpression' &&
                    path.node.operator  === 'void'
                ) {
                    path.replaceWith(
                        t.blockStatement([
                            t.expressionStatement(path.node.argument),
                        ])
                    );
                }
            },
        },
    };
}
