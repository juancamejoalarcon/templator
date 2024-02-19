import path from 'path';

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {

    const common = {
        base: "./",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        plugins: [svelte()],
    }

    if (command === 'serve') return { 
        ...common,
        rollupOptions: {
            external: ['svelte'],
            output: {
                globals: {
                    vue: 'svelte',
                },
            },
        },
    }

    if (mode === 'demo') {
        return {
            ...common,
            build: {
                outDir: './dist/demo'
            }
        }
    }

    return {
        ...common,
        publicDir: false,
        build: {
            lib: {
                entry: path.resolve(__dirname, './src/lib/core/Templator/index.js'),
                name: 'Templator',
                fileName: 'templator',
            },
            outDir: './dist/lib',
        },
    }
})
