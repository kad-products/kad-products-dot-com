import HomepageContent from '@/content/homepage.mdx';
import { HomepageLayout } from '@/layouts';

export default async function Pages__root(): Promise<React.JSX.Element> {
	return (
		<HomepageLayout pageTitle="Welcome">
			<HomepageContent />
		</HomepageLayout>
	);
}
