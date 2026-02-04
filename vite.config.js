import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.scss',
                'resources/css/template.scss',
                'resources/js/app.js'
            ],
            refresh: true,
        }),
    ],
     css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: [
                    'import',
                    'color-functions',
                    'global-builtin',
                    'if-function',
                ],
            },
        },
    }
});
