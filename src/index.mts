import { IDialectikPlugin, IPluginProvider } from '@dialectik/plugin-interface';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

const katexStylesheet = 'https://cdn.jsdelivr.net/npm/katex@0.16.3/dist/katex.min.css';

const katexPlugin: IDialectikPlugin = {
  withMain: false,
  withComponents: false,
  stylesheets: [katexStylesheet],
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex],
  isRequired: (markdown: string) => {
    const inlineMathPattern = /\\\((?:[^\\]|\\.)+\\\)/;
    const displayMathPattern = /\$\$(?:[^\$]|\\.)+\$\$|\\\[.*?\\\]/;
    return inlineMathPattern.test(markdown) || displayMathPattern.test(markdown);
  },
  requires: []
};

export const PluginProvider : IPluginProvider = {
  getPlugin(): IDialectikPlugin {
    return katexPlugin
  }
}
