// French typography for French blog posts (src/blog/fr/): the same rules as
// French copy modules (typography.ts), applied to Markdown text only, never
// to code. Registered in astro.config.mjs.
import { frenchTypography } from './typography';

interface MdNode {
  type: string;
  value?: string;
  children?: MdNode[];
}

const isFrenchPost = (path: string | undefined) => !!path && /[\\/]src[\\/]blog[\\/]fr[\\/]/.test(path);

export function remarkFrenchTypography() {
  return (tree: MdNode, file: { path?: string; history?: string[] }) => {
    if (!isFrenchPost(file.path ?? file.history?.[0])) return;
    const walk = (node: MdNode) => {
      if (node.type === 'text' && typeof node.value === 'string') node.value = frenchTypography(node.value);
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}
