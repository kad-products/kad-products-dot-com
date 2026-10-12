import { StrictMode } from 'react';
import { LayoutFooter } from '@/components/layout';
import { SubpageMetaNav } from '@/components/layout/subpage-meta-nav';
import { SubpageSideNavSection } from '@/components/subpage-side-nav-section';
import type { PageMeta } from '@/types/page-meta';

export function SubpageLayout({
	children,
	pageMeta,
	pageTitle,
}: {
	children: React.ReactNode;
	pageMeta?: PageMeta;
	pageTitle: string;
}): React.ReactNode {
	return (
		<StrictMode>
			<header className="site-header">
				<h1 className="company-title-box">
					<a href="/" title="home">
						🦄
					</a>
					<a href="/" title="Home">
						KAD Products
					</a>
				</h1>
				<h2 className="page-title">{pageTitle}</h2>
			</header>
			<main className="subpage-layout">
				<aside>
					<nav className="subpage-side-nav">
						<SubpageSideNavSection
							sectionLabel="Fundamentals"
							items={[
								{
									href: '/about',
									label: 'About',
								},
								{
									href: '/policies',
									label: 'Policies',
								},
								{
									href: '/contact',
									label: 'Contact',
								},
							]}
						/>
						<SubpageSideNavSection
							sectionLabel="Products"
							items={[
								{
									href: '/products/rezept',
									label: 'Rezept',
								},
								{
									href: '/products/gratitude',
									label: 'Gratitude',
								},
								{
									href: '/products/mom-test',
									label: 'Mom Test',
								},
								{
									href: '/products/golden-key-matrix',
									label: 'Golden Key Matrix',
								},
								{
									href: '/products/jeopardy',
									label: 'Jeopardy',
								},
								{
									href: '/products/agw',
									label: 'AGW',
								},
							]}
						/>
						<SubpageSideNavSection
							sectionLabel="Tools"
							items={[
								{
									href: '/tools/platform',
									label: 'Platform',
								},
								{
									href: '/tools/sofrito',
									label: 'Sofrito',
								},
								{
									href: '/tools/shed',
									label: 'Shed',
								},
								{
									href: '/tools/docs',
									label: 'Docs',
								},
							]}
						/>
					</nav>
				</aside>
				<SubpageMetaNav pageMeta={pageMeta} />
				<article className="subpage-content">{children}</article>
			</main>
			<LayoutFooter />
		</StrictMode>
	);
}
