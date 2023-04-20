import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    server: {
        origin: 'http://127.0.0.1:8080',
    },
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    build: {
        manifest: true,
        rollupOptions: {
            // overwrite default .html entry
            input: './resources/js/app.js',
        },
        outDir: './dist'
    },

});
