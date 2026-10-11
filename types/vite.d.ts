declare module '*?url' {
	const result: string;
	export default result;
}

declare module '*.mdx' {
	import type { MDXProps } from 'mdx/types';
	import type { ComponentType } from 'react';
	export const frontmatter: Record<string, unknown>;
	const MDXComponent: ComponentType<MDXProps>;
	export default MDXComponent;
}
