import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
const katexStylesheet = 'https://cdn.jsdelivr.net/npm/katex@0.16.3/dist/katex.min.css';
const katexPlugin = {
    name: 'katex',
    stylesheet: [katexStylesheet],
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    isRequired: (markdown) => {
        const inlineMathPattern = /\\\((?:[^\\]|\\.)+\\\)/;
        const displayMathPattern = /\$\$(?:[^\$]|\\.)+\$\$|\\\[.*?\\\]/;
        return inlineMathPattern.test(markdown) || displayMathPattern.test(markdown);
    },
};
export const PluginProvider = {
    getPlugin() {
        return katexPlugin;
    }
};
