import path from 'node:path';
import { cloudflare } from '@cloudflare/vite-plugin';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { redwood } from 'rwsdk/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	const tunnelHost = env.VITE_BASE_URL ? new URL(env.VITE_BASE_URL).host : null;

	return {
		resolve: {
			alias: {
				'@/content': path.resolve(__dirname, './content'),
			},
		},
		css: {
			modules: {
				localsConvention: 'camelCase',
			},
		},
		plugins: [
			{
				enforce: 'pre',
				...mdx({
					remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
				}),
			},
			cloudflare({
				viteEnvironment: { name: 'worker' },
			}),
			redwood(),
		],
		server: {
			...(tunnelHost && {
				cors: false,
				allowedHosts: [tunnelHost],
				hmr: {
					host: tunnelHost,
					protocol: 'wss',
				},
			}),
		},
	};
});
