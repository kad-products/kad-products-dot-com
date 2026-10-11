import type { ComponentType } from 'react';
import type { RequestInfo } from 'rwsdk/worker';
import { SubpageLayout } from '@/layouts';

const contentModules = import.meta.glob('/content/**/*.mdx');

type MDXModule = { default: ComponentType; frontmatter?: Record<string, unknown> };

export default async function Pages__subpage({ request }: RequestInfo): Promise<React.JSX.Element> {
	const slug = new URL(request.url).pathname.replace(/\/+$/, '');
	const loader = contentModules[`/content${slug}.mdx`];

	if (!loader) {
		return (
			<SubpageLayout pageTitle="Not found">
				<p>Page not found.</p>
			</SubpageLayout>
		);
	}

	const { default: PageContent } = (await loader()) as MDXModule;

	return (
		<SubpageLayout pageTitle={slug}>
			<PageContent />
		</SubpageLayout>
	);
}
