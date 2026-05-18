import { visit } from 'unist-util-visit';

const HEADINGS = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

export default function rehypeMdxJsxHeadings() {
    return (tree) => {
        visit(tree, (node) => {
            if (
                (node.type === 'mdxJsxFlowElement' ||
                    node.type === 'mdxJsxTextElement') &&
                HEADINGS.has(node.name)
            ) {
                const properties = {};
                for (const attr of node.attributes ?? []) {
                    if (
                        attr.type === 'mdxJsxAttribute' &&
                        typeof attr.value === 'string'
                    ) {
                        properties[
                            attr.name === 'class' ? 'className' : attr.name
                        ] = attr.value;
                    }
                }
                const tagName = node.name;
                node.type = 'element';
                node.tagName = tagName;
                node.properties = properties;
                delete node.name;
                delete node.attributes;
                delete node.data;
            }
        });
    };
}
