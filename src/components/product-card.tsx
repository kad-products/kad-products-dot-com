export function ProductCard({ title, href, body }: { title: string; href: string; body: string }): React.ReactNode {
	return (
		<article className="product-card">
			<header>
				<a href={href}>{title}</a>
			</header>
			<article>{body}</article>
		</article>
	);
}
