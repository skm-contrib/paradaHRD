import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            }
        }
    },
    experimental: {
        outputFileTracingExcludes: {
            '*': [
                './node_modules/.pnpm/date-fns*',
                './node_modules/.pnpm/date-fns',
                './node_modules/.pnpm/date-fns@2.29.3',
                'node_modules/.pnpm/date-fns*',
                'node_modules/.pnpm/date-fns',
                'node_modules/.pnpm/date-fns@2.29.3',
                '**/node_modules/date-fns*',
                '**/node_modules/date-fns',
                '**/node_modules/date-fns@2.29.3',
            ],
        }
    }


});
