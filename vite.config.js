import { defineConfig } from 'vite'
import browserslistToEsbuild from 'browserslist-to-esbuild'
import path from 'path'
import { ViteMinifyPlugin } from 'vite-plugin-minify'


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		ViteMinifyPlugin({}),
	],
	build: {
		target: browserslistToEsbuild(),
	},
	resolve: {
		alias: {
			'@': path.resolve( __dirname, 'src' ),
		},
	},
})
