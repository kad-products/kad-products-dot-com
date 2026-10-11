type SideNavItem = {
	href: string;
	label: string;
};
export function SubpageSideNavSection({ sectionLabel, items }: { sectionLabel: string; items: SideNavItem[] }): React.ReactNode {
	return (
		<div className="subpage-side-nav-section">
			<header className="subpage-side-nav-section-header">{sectionLabel}</header>
			{items.map(item => {
				return (
					<a key={item.href} href={item.href}>
						{item.label}
					</a>
				);
			})}
		</div>
	);
}
