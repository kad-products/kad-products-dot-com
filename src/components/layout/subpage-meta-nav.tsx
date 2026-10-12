import { GitHubLogoIcon, ReaderIcon } from '@radix-ui/react-icons';
import type { PageMeta } from '@/types/page-meta';

export function SubpageMetaNav({ pageMeta }: { pageMeta?: PageMeta }): React.ReactNode {
	if (!pageMeta) {
		return null;
	}

	return (
		<nav className="subpage-meta-nav">
			{Object.entries(pageMeta).map(([key, val]) => {
				return (
					<a href={val.url} key={key}>
						{key === 'repo' && val.type === 'github' && <GitHubLogoIcon />}
						{key === 'docs' && val.type === 'docs' && <ReaderIcon />}
					</a>
				);
			})}
		</nav>
	);
}
