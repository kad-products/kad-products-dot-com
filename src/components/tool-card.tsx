export function ToolCard({ title, href, body }: { title: string; href: string; body: string }): React.ReactNode {
	return (
		<article className="tool-card">
			<header>
				<a href={href}>{title}</a>
			</header>
			<article>{body}</article>
		</article>
	);
}
