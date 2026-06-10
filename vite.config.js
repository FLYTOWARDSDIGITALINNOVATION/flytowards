import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (!id.includes('node_modules')) return;

                    if (id.includes('node_modules/react/') || id.includes('node_modules\\react\\')) return 'vendor-react';
                    if (id.includes('node_modules/framer-motion/') || id.includes('node_modules\\framer-motion\\')) return 'vendor-framer-motion';
                    if (id.includes('node_modules/lucide-react/') || id.includes('node_modules\\lucide-react\\')) return 'vendor-icons';
                    return 'vendor';
                },
            },
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:5000',
                changeOrigin: true,
            },
            '/uploads': {
                target: 'http://127.0.0.1:5000',
                changeOrigin: true,
            },
        },
    },
})
