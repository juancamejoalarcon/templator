import path from 'path';

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

    const common = {
        base: "./",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        plugins: [svelte()],
    }

    if (mode === 'demo') {
        return {
            ...common,
            build: {
                outDir: './demo'
            }
        }
    }

    return {
        ...common,
        build: {
            lib: {
                entry: path.resolve(__dirname, './src/lib/core/Templator/index.js'),
                name: 'Templator',
                fileName: 'templator',
            },
            rollupOptions: {
                // make sure to externalize deps that shouldn't be bundled
                // into your library
                external: ['svelte'],
                output: {
                    globals: {
                        vue: 'svelte',
                    },
                },
            },
        },
    }
})
