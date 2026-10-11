import { StrictMode } from 'react';
import { LayoutFooter } from '@/components/layout';

export function SubpageLayout({ children, pageTitle }: { children: React.ReactNode; pageTitle: string }): React.ReactNode {
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
			<main>
				<aside>
					<nav className="subpage-side-nav">
						<div className="subpage-side-nav-section">
							<a href="/about">About</a>
							<a href="/policies">Policies</a>
							<a href="/contact">Contact</a>
						</div>
					</nav>
				</aside>
				<article className="subpage-content">{children}</article>
			</main>
			<LayoutFooter />
		</StrictMode>
	);
}
