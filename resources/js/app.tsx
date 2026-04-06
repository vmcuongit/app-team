
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from '@/components/providers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')) as Promise<React.ComponentType>,
    setup({ el, App, props }) {
        if (el) {
            const root = createRoot(el);
            root.render(
                <ThemeProvider>
                    <App {...props} />
                </ThemeProvider>
            );
        }
    },
    progress: {
        color: '#4B5563',
    },
});