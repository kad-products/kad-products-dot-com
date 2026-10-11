import { StrictMode } from 'react';
import { LayoutFooter } from '@/components/layout';

export function HomepageLayout({ children, pageTitle }: { children: React.ReactNode; pageTitle: string }): React.ReactNode {
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
				<nav className="homepage-top-nav">
					<a href="/about">About Us</a>
					<a href="/policies">Policies</a>
					<a href="/contact">Contact</a>
				</nav>
			</header>
			<main>
				<h2 className="page-title">{pageTitle}</h2>
				<article className="homepage-content">{children}</article>
			</main>
			<LayoutFooter />
		</StrictMode>
	);
}
