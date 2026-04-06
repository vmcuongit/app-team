/**
 * Fix wayfinder relative imports → @wayfinder
 * Run after: php artisan wayfinder:generate --path=resources/js/wayfinder
 */
import { readFileSync, writeFileSync, rmSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const routesDir = join(__dirname, '../resources/js/wayfinder/routes');

// Remove duplicate wayfinder/wayfinder/ if exists
try {
    rmSync(join(__dirname, '../resources/js/wayfinder/wayfinder'), { recursive: true, force: true });
    console.log('Removed duplicate wayfinder/wayfinder/');
} catch {}

// Replace any relative wayfinder import with @wayfinder
const fixFile = (filePath) => {
    let content = readFileSync(filePath, 'utf-8');
    const original = content;
    // Match any import ending with /wayfinder (single or double quotes)
    content = content.replace(/from '[^']*\/wayfinder'/g, "from '@wayfinder'");
    content = content.replace(/from "[^"]*\/wayfinder"/g, 'from "@wayfinder"');

    if (content !== original) {
        writeFileSync(filePath, content);
        console.log(`Fixed: ${filePath.replace(__dirname + '/../', '')}`);
    }
};

const walk = (dir) => {
    readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) {
            walk(fullPath);
        } else if (entry.name.endsWith('.ts')) {
            fixFile(fullPath);
        }
    });
};

walk(routesDir);
console.log('Done!');
